import './dotenv'

import { EventEmitter } from 'events'
EventEmitter.defaultMaxListeners = 0

// 捕获全局异常
process.on('uncaughtException', err => {
  console.log(err.message)
  process.exit(-1)
})

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection:', reason)
})

import startService from './server'
// 启动koa服务器
startService()
