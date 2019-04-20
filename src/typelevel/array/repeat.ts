import { Cons } from './cons'

/**
 * Returns a tuple with T repeated N times.
 */
export type Repeat<T, N extends number, R extends any[] = []> = {
  0: R
  1: Repeat<T, N, Cons<T, R>>
}[R['length'] extends N ? 0 : 1]
