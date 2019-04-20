import { True as TRUE } from '../boolean-algebra/values'
import { Equal } from '../type/equal'

/**
 * Asserts that T is True.
 */
export type True<T extends TRUE> = Equal<T, TRUE>
