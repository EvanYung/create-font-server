import { request } from '../utils/request.ts'

type PageParams<T extends Record<string, any> = {}> = {
  pageNum: number
  pageSize: number
} & T

interface PageResult<T> {
  list: T[]
  current: number
  pages: number
  size: number
  total: number
}

interface FontDto {
  text: string
  svg: string
}

export const getFontPages = (params: PageParams) =>
  request<PageResult<FontDto>>({ url: '/fontPages', params })
