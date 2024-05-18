import type { Difference } from './difference'
import type { Union } from './union'

/**
 * Returns a set of elements belonging to one but not both of two given sets.
 */
export type SymmetricDifference<A, B> = Union<Difference<A, B>, Difference<B, A>>
