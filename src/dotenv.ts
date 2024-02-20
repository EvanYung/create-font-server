import dotenv from 'dotenv'
const ENV = process.env.NODE_ENV || 'production'

// 设置环境变量
dotenv.config({ path: `env/.env.${ENV}` })
