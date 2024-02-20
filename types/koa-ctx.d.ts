import { RetResult } from './config'

declare module 'koa' {
  export interface Context {
    body: RetResult
  }
}
