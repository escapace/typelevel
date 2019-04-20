import { False, True } from './values'

/**
 * Returns True if both A and B are True, and False if either are False.
 */
export type And<A extends True | False, B extends True | False> = A extends True
  ? (B extends True ? True : False)
  : False
