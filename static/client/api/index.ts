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

export interface FontDto {
  id: number
  text: string
  code: string
  svg: string
}

export const getFontPages = (params: PageParams) =>
  request<PageResult<FontDto>>({ url: '/fontPages', params })

interface AddFontStruct {
  text: string
  svg: string
}

export const addFont = (body: AddFontStruct) =>
  request<boolean>({ url: '/addFont', method: 'POST', body })

export const deleteFont = (params: { id: number }) =>
  request<boolean>({ url: '/deleteFont', params })
