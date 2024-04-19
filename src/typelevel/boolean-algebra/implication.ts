import type { False, True } from './values'

/**
 * Returns True if Either A is False or B is True.
 */
export type Implication<
  A extends False | True,
  B extends False | True
> = A extends False ? True : B extends True ? True : False
