import { Tail } from './tail'
import { Head } from './head'
import { Cons } from './prepend'

/**
 * Creates a slice of list T with N elements dropped from the beginning.
 */
export type Drop<N extends number, T extends any[], R extends any[] = []> = {
  0: T
  1: Drop<N, Tail<T>, Cons<Head<T>, R>>
}[T extends [] ? 0 : R['length'] extends N ? 0 : 1]
