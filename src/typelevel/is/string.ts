import { False, True } from '../boolean-algebra/values'

/**
 * Returns True if T is a string.
 */
export type String<T> = T extends string ? True : False
