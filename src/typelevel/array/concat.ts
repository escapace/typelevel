import { Tail } from './tail'
import { Reverse } from './reverse'
import { Head } from './head'
import { Cons } from './cons'

/**
 * Returns a new tuple concatenating A and B
 */
export type Concat<A extends any[], B extends any[], R extends any[] = []> = {
  0: Reverse<R>
  1: Concat<Tail<A>, B, Cons<Head<A>, R>>
  2: Concat<A, Tail<B>, Cons<Head<B>, R>>
}[A extends [] ? (B extends [] ? 0 : 2) : 1]
