import type { False, True } from './values'
import type { Not } from './not'
import type { Xor } from './xor'

/**
 * Returns True if both A and B are identical.
 */
export type Equivalence<A extends False | True, B extends False | True> = Not<
  Xor<A, B>
>
