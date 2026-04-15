// export type Repeat<T, N extends number, R extends any[] = []> = {
//   0: R
//   1: Repeat<T, N, Cons<T, R>>
// }[R['length'] extends N ? 0 : 1]

/**
 * Returns a list with T repeated N times.
 */
export type Repeat<T, N extends number> = N extends N
  ? number extends N
    ? T[]
    : _Repeat<T, N, []>
  : never

type _Repeat<T, N extends number, R extends unknown[]> = R['length'] extends N
  ? R
  : _Repeat<T, N, [T, ...R]>
