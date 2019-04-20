import { Not } from '../boolean-algebra/not'
import { Falsy } from './falsy'

/**
 * Returns True if T is truthy.
 */
export type Truthy<T> = Not<Falsy<T>>
