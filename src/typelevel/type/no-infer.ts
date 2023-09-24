// eslint-disable-next-line @typescript-eslint/ban-types
export type NoInfer<T extends {}> = T extends { [K in keyof T]: any }
  ? { [K in keyof T]: T[K] }
  : never
