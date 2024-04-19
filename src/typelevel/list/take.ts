import type { Tail } from './tail'
import type { Reverse } from './reverse'
import type { Head } from './head'
import type { Cons } from './prepend'

/**
 * Returns a slice of list T with N elements taken from the beginning.
 */
export type Take<N extends number, T extends any[], R extends any[] = []> = {
  0: Reverse<R>
  1: Take<N, Tail<T>, Cons<Head<T>, R>>
}[T extends [] ? 0 : R['length'] extends N ? 0 : 1]
