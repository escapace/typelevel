import { False, True } from '../boolean-algebra/values'

/**
 * Returns True if T is number | boolean | string | symbol.
 */
export type Primitive<T> = T extends number
  ? True
  : T extends boolean
  ? True
  : T extends string
  ? True
  : T extends symbol
  ? True
  : False
