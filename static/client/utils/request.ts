import { obj2Param } from './index.ts'

const baseUrl = 'http://localhost:7800/evan'

export function getHeaders(defaultHeaders = {}) {
  return {
    ...defaultHeaders,
    'Content-Type': 'application/json',
  }
}

interface RequestOptions {
  url: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  params?: Record<string, any>
  body?: Record<string, any>
}

export const request = <T>({
  url,
  method = 'GET',
  params,
  body,
}: RequestOptions) =>
  new Promise<T>((resolve, reject) => {
    const _url =
      method === 'GET'
        ? obj2Param(`${baseUrl}${url}`, params)
        : `${baseUrl}${url}`

    const options: RequestInit = {
      method,
      headers: getHeaders(),
    }

    ;['POST', 'PUT'].includes(method) && (options.body = JSON.stringify(body))

    fetch(_url, options)
      .then((res) => res.json())
      .then((res) => {
        const { code, message, data } = res

        if (code !== 0) {
          reject(new Error(message))
        } else {
          resolve(data)
        }
      })
      .catch((err) => reject(err))
  })
