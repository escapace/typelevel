import { Tail } from './tail'
import { Reverse } from './reverse'
import { Head } from './head'
import { Cons } from './cons'

/**
 * Returns a slice of tuple T with N elements taken from the beginning.
 */
export type Take<N extends number, T extends any[], R extends any[] = []> = {
  0: Reverse<R>
  1: Take<N, Tail<T>, Cons<Head<T>, R>>
}[T extends [] ? 0 : R['length'] extends N ? 0 : 1]
