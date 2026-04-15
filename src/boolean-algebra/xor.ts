import type { False, True } from './values'

/**
 * Returns True if exactly one (but not both) of A, B is true.
 */
export type Xor<A extends False | True, B extends False | True> = A extends True
  ? B extends True
    ? False
    : True
  : B extends True
    ? True
    : False
