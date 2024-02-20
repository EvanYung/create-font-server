import { RetResult } from '#/config'

export class Result {
  static success(data: unknown, message: string): RetResult {
    return {
      code: 0,
      message,
      data,
    }
  }
}
