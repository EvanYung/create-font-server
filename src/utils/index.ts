import fs from 'fs'
import os from 'os'
import crypto from 'crypto'
import { isObject } from './is'

export const randomStr = (len: number) => {
  if (len < 1) return ''
  return crypto.randomBytes(len).toString('hex').substr(0, len)
}

export const firstUpperCase = (str: string, toLow = false): string => {
  toLow && (str = str.toLowerCase())
  return str.replace(/( |^)[a-z]/g, L => L.toUpperCase())
}

// 获取本机ip
export const getIPAdress = (): string => {
  const interfaces = os.networkInterfaces()
  for (const devName in interfaces) {
    const iface = interfaces[devName]
    for (let i = 0; i < iface.length; i++) {
      const alias = iface[i]
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address
      }
    }
  }
}

export const Md5Hex = (data: crypto.BinaryLike): string => {
  const hash = crypto.createHash('md5')
  return hash.update(data).digest('hex')
}

export const file2Base64 = ({ path }: { path: string }, len = 0): string => {
  let base64Str = fs.readFileSync(path).toString('base64')
  len && (base64Str = base64Str.slice(0, len))
  return base64Str
}

export const bytesToHex = (bytes: number[]) => {
  const hex = []
  for (let i = 0; i < bytes.length; i++) {
    hex.push((bytes[i] >>> 4).toString(16))
    hex.push((bytes[i] & 0xf).toString(16))
  }
  return hex.join('')
}

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export function deepMerge<T = any>(src: any = {}, target: any = {}): T {
  let key: string
  for (key in src) target[key] = isObject(src[key]) ? deepMerge(src[key], target[key]) : (target[key] = src[key])

  return target
}

export function deepMerge2<T = any>(src: any = {}, target: any = {}): T {
  let key: string
  for (key in src) {
    if (!Reflect.has(target, key)) continue
    target[key] = isObject(src[key]) ? deepMerge2(src[key], target[key]) : (target[key] = src[key])
  }
  return target
}

export function structErrorMsg(error: any) {
  const { key, value, type } = error
  if (value === undefined) {
    return `${key} is required`
  } else {
    const typeValue = Array.isArray(value) ? 'array' : typeof value
    const formatedValue = typeValue === 'object' ? JSON.stringify(value) : value

    return `${key} expected type ${type} received ${formatedValue} with type ${typeValue}`
  }
}
