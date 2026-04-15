import type { Not } from '../boolean-algebra/not'
import type { Falsy } from './falsy'

/**
 * Returns True if T is truthy.
 */
export type Truthy<T> = Not<Falsy<T>>
