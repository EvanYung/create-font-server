import { getIPAdress } from 'src/utils'

export const ROUTER_PREFIX = process.env.ROUTER_PREFIX || '/koa'

export const REDIS = {
  host: process.env.REDIS_HOST,
  port: Number(process.env.REDIS_PORT),
  password: process.env.REDIS_PWD,
  db: Number(process.env.REDIS_DB),
  namespace: process.env.REDIS_NAMESPACE,
}

export const APP_PORT = Number(process.env.APP_PORT) || 3000

export const APP_HOST = process.env.APP_HOST

export const IP_ADDRESS = getIPAdress()

export const MONGODB_URI = process.env.MONGODB_URI
export const MONGODB_DB_NAME = process.env.MONGODB_DB_NAME
