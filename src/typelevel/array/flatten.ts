import { Tail } from './tail'
import { Reverse } from './reverse'
import { Head } from './head'
import { Cons } from './cons'

/**
 * Flattens tuple a single level deep.
 */
export type Flatten<
  T extends any[][],
  R1 extends any[] = [],
  R2 extends any[] = []
> = {
  0: Reverse<R2>
  1: Flatten<Tail<T>, Head<T, []>, R2>
  2: Flatten<T, Tail<R1>, Cons<Head<R1>, R2>>
}[T extends [] ? (R1 extends [] ? 0 : 2) : (R1 extends [] ? 1 : 2)]
