import { Equal } from '../type/equal'

/**
 * Returns True if T is never.
 */
export type Never<T> = Equal<T, never>
