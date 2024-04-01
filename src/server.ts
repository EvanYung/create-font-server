import Koa from 'koa'
import path from 'path'
import helmet from 'koa-helmet'
import cors from 'koa2-cors'
import Router from 'koa-router'
import koaStatic from 'koa-static'
import websockify from 'koa-websocket'
import body from 'koa-body'
import koaValidator from 'koa-async-validator'
import route from 'koa-route'
import koaLogger from 'koa-logger'
import chalk from 'chalk'
import consola from 'consola'

import { ROUTER_PREFIX, APP_HOST, APP_PORT, IP_ADDRESS } from './config'

import AppRoutes from './routes'

import staticValidator from './middlewares/staticValidator'
import errorHandler from './middlewares/errorHandler'
import { MySqlDataSource } from './config/database'

const app = websockify(new Koa())

app.ws.use(function (ctx, next) {
  ctx.websocket.send('connection succeeded!')
  consola.info(chalk.magenta(`WS: connection succeeded!`))
  return next()
})

app.ws.use(
  route.all('/test', function (ctx) {
    ctx.websocket.on('message', function (message: unknown) {
      // do something with the message from client
      if (message !== 'ping') {
        consola.info(chalk.magenta(`WS: ${message} received`))

        const data = JSON.stringify({
          id: Math.ceil(Math.random() * 1000),
          time: new Date().getTime(),
          res: `${message}`,
        })

        ctx.websocket.send(data)
      }
    })
  })
)

const logger = koaLogger()

app.use(logger)

// security
app.use(
  helmet({
    referrerPolicy: { policy: 'origin' },
    contentSecurityPolicy: false,
    crossOriginResourcePolicy: false,
  })
)

app.use(cors())

app.use(
  body({
    multipart: true,
    formidable: {
      keepExtensions: true,
      maxFieldsSize: 20 * 1024 * 1024,
    },
  })
)

// 错误处理中间件
app.use(errorHandler)

// 静态目录校验
app.use(staticValidator)

app.use(koaStatic(path.resolve(__dirname, '../static'), { gzip: true }))

app.use(
  koaValidator({
    customValidators: {
      isArray: (value: unknown) => Array.isArray(value),
    },
  })
)

const router = new Router({ prefix: ROUTER_PREFIX })

// router
AppRoutes.forEach(route => router[route.method](route.path, route.action))

app.use(router.routes())

app.use(router.allowedMethods())

const startService = async (pid = process.pid) => {
  await MySqlDataSource.initialize()
  app.listen(APP_PORT, APP_HOST, () => {
    const server =
      APP_HOST === '0.0.0.0'
        ? `http://${IP_ADDRESS}:${APP_PORT} & http://127.0.0.1:${APP_PORT}`
        : `http://${APP_HOST}:${APP_PORT}`

    consola.ready({
      message: `Server ${pid} listening on ${server} in ${app.env}`,
      badge: true,
    })
  })
}

export default startService
