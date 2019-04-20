import { False, True } from './values'

/**
 * Returns True if Either A is False or B is True.
 */
export type Implication<
  A extends True | False,
  B extends True | False
> = A extends False ? True : B extends True ? True : False
