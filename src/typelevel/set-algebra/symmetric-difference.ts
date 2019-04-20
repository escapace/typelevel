import { Difference } from './difference'
import { Union } from './union'

/**
 * Returns a set of elements belonging to one but not both of two given sets.
 */
export type SymmetricDifference<A, B> = Union<
  Difference<A, B>,
  Difference<B, A>
>
