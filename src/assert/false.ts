import type { False as FALSE } from '../boolean-algebra/values'
import type { Equal } from '../type/equal'

/**
 * Asserts that T is False.
 */
export type False<T extends FALSE> = Equal<T, FALSE>
