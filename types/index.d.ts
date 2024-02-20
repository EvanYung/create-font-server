declare interface Fn<T = any, R = T> {
  (...arg: T[]): R
}

declare interface PromiseFn<T = any, R = T> {
  (...arg: T[]): Promise<R>
}

declare type EmitType = (event: string, ...args: any[]) => void

declare function parseInt(s: string | number, radix?: number): number

declare function parseFloat(string: string | number): number

declare type Nullable<T> = T | null

declare type TimeoutHandle = ReturnType<typeof setTimeout>

declare type IntervalHandle = ReturnType<typeof setInterval>

declare type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>
}
