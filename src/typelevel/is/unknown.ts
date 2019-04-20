import { Equal } from '../type/equal'

/**
 * Returns True if T is unknown.
 */
export type Unknown<T> = Equal<T, unknown>
