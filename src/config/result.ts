import { PageParams, RetResult } from '#/config'

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

  static page(list: any, total: number, para: PageParams) {
    return {
      list,
      total,
      current: para.pageNum,
      size: para.pageSize,
      pages: Math.ceil(total / para.pageSize),
    }
  }
}
