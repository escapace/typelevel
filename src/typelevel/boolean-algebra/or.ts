import type { False, True } from './values'

/**
 * Returns True if either A, B is True, and False if both A and B are False.
 */
export type Or<A extends False | True, B extends False | True> = A extends True
  ? True
  : B extends True
    ? True
    : False
