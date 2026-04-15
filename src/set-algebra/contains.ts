import type { False, True } from '../boolean-algebra/values'
import type { Equal } from '../type/equal'

/**
 * Returns True if B is a subset of A.
 */
export type Contains<A, B> = Equal<B extends A ? True : False, True>
