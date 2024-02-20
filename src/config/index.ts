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

function truthy(value?: string) {
  return value === 'true'
}

const {
  MYSQL_CONFIG_TYPE,
  MYSQL_CONFIG_HOST,
  MYSQL_CONFIG_PORT,
  MYSQL_CONFIG_USERNAME,
  MYSQL_CONFIG_PASSWORD,
  MYSQL_CONFIG_DATABASE,
  MYSQL_CONFIG_SYNCHRONIZE,
} = process.env

export const MYSQL_CONFIG = {
  type: MYSQL_CONFIG_TYPE,
  host: MYSQL_CONFIG_HOST,
  port: parseInt(MYSQL_CONFIG_PORT!, 10),
  username: MYSQL_CONFIG_USERNAME,
  password: MYSQL_CONFIG_PASSWORD,
  database: MYSQL_CONFIG_DATABASE,
  synchronize: truthy(MYSQL_CONFIG_SYNCHRONIZE),
}
