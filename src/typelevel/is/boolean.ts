import { False, True } from '../boolean-algebra/values'

/**
 * Returns True if T is a boolean.
 */
export type Boolean<T> = T extends boolean ? True : False
