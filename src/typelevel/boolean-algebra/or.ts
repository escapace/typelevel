import { False, True } from './values'

/**
 * Returns True if either A, B is True, and False if both A and B are False.
 */
export type Or<A extends True | False, B extends True | False> = A extends True
  ? True
  : (B extends True ? True : False)
