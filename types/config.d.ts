export interface RetResult {
  code: number
  message: string
  data?: any
}

export interface PageParams {
  pageNum: number
  pageSize: number
  [x: string]: any
}
