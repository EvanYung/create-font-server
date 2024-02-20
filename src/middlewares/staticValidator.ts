import { Context, Next } from 'koa'

const blackList = ['contracts']

export default async (ctx: Context, next: Next): Promise<void> => {
  if (blackList.some(item => ctx.path.startsWith(`/${item}`))) {
    const error = Object.assign(new Error('static forbidden！'), {
      statusCode: 403,
    })

    throw error
  }

  await next()
}
