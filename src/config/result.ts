import { RetResult } from '#/config'

export class Result {
  static success(data: unknown, message: string): RetResult {
    return {
      code: 0,
      message,
      data,
    }
  }

  static error(code: number = 1, message: string = '请求失败'): RetResult {
    return {
      code,
      message,
      data: null,
    }
  }
}
