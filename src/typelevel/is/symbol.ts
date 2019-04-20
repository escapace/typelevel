import { False, True } from '../boolean-algebra/values'

/**
 * Returns True if T is a symbol.
 */
export type Symbol<T> = T extends symbol ? True : False
