import chalk from 'chalk'
import consola from 'consola'
import { Context, Next } from 'koa'

export default async (ctx: Context, next: Next): Promise<void> => {
  try {
    await next()

    const code = ctx.body?.code

    if (code && code !== 0) {
      consola.info(chalk.red(`${code}-error:`, ctx.body.message))
    }
  } catch (err) {
    const status = err.statusCode || err.status || 500

    consola.error(chalk.red(`${status}-error:`, err.message))

    ctx.status = status

    ctx.body = {
      code: status,
      message: err.message,
    }
  }
}
