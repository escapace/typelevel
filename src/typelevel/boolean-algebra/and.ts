import type { False, True } from './values'

/**
 * Returns True if both A and B are True, and False if either are False.
 */
export type And<A extends False | True, B extends False | True> = A extends True
  ? B extends True
    ? True
    : False
  : False
