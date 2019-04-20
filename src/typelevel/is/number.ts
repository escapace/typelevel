import { False, True } from '../boolean-algebra/values'

/**
 * Returns True if T is a number.
 */
export type Number<T> = T extends number ? True : False
