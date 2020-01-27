import { False, True } from './values'

/**
 * Returns True if exactly one (but not both) of A, B is true.
 */
export type Xor<A extends True | False, B extends True | False> = A extends True
  ? B extends True
    ? False
    : True
  : B extends True
  ? True
  : False
