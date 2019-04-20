import { False, True } from './values'
import { Not } from './not'
import { Xor } from './xor'

/**
 * Returns True if both A and B are identical.
 */
export type Equivalence<A extends True | False, B extends True | False> = Not<
  Xor<A, B>
>
