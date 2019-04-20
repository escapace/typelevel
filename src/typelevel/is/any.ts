import { Equal } from '../type/equal'

/**
 * Returns True if T is any.
 *
 * Types considered falsy in JS:
 * undefined | null | 0 | '' | false | void
 */
export type Any<T> = Equal<T, any>
