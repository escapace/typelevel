import { False, True } from '../boolean-algebra/values'

/**
 * Returns True if T is falsy.
 *
 * Types considered falsy in JS:
 * undefined | null | 0 | '' | false | void
 */
export type Falsy<T> = T extends ''
  ? True
  : T extends string
  ? True | False
  : T extends 0
  ? True
  : T extends number
  ? True | False
  : T extends false
  ? True
  : T extends boolean
  ? True | False
  : // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  T extends undefined | null | void
  ? True
  : never
