import type { Tail } from './tail'
import type { Reverse } from './reverse'
import type { Head } from './head'
import type { Cons } from './prepend'

/**
 * Creates an list of grouped elements, the first of which contains the first
 * elements of A and B, the second of which contains the second elements
 * of A and B, and so on.
 */
export type Zip<A extends any[], B extends any[], R extends any[] = []> = {
  0: Reverse<R>
  1: Zip<Tail<A>, Tail<B>, Cons<[Head<A>, Head<B>], R>>
}[A extends [] ? 0 : B extends [] ? 0 : 1]
