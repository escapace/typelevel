import { False, True } from '../boolean-algebra/values'

/**
 * Check if a type matches another (`<=`).
 */
export type Extends<V, T> = V extends T ? True : False
