import { Head } from './head'
import { Tail } from './tail'

/**
 * Gets the last element of tuple T.
 */
export type Last<T extends any[], D = never> = {
  0: D
  1: Head<T>
  2: Last<Tail<T>>
}[T extends [] ? 0 : T extends [any] ? 1 : 2]
