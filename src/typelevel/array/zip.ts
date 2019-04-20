import { Tail } from './tail'
import { Reverse } from './reverse'
import { Head } from './head'
import { Cons } from './cons'

/**
 * Creates an tuple of grouped elements, the first of which contains the first
 * elements of A and B, the second of which contains the second elements
 * of A and B, and so on.
 */
export type Zip<A extends any[], B extends any[], R extends any[] = []> = {
  0: Reverse<R>
  1: Zip<Tail<A>, Tail<B>, Cons<[Head<A>, Head<B>], R>>
}[A extends [] ? 0 : B extends [] ? 0 : 1]
