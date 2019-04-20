/**
 * Gets the first element of tuple T.
 */
export type Head<T extends any[], D = never> = T extends [infer X, ...any[]]
  ? X
  : D
