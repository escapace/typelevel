import { False as FALSE } from '../boolean-algebra/values'
import { Equal } from '../type/equal'

/**
 * Asserts that T is False.
 */
export type False<T extends FALSE> = Equal<T, FALSE>
