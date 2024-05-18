import type { False, True } from '../boolean-algebra/values'

/**
 * Returns True if T is falsy.
 *
 * Types considered falsy in JS:
 * undefined | null | 0 | '' | false | void
 */
export type Falsy<T> = T extends ''
  ? True
  : T extends string
    ? False | True
    : T extends 0
      ? True
      : T extends number
        ? False | True
        : T extends false
          ? True
          : T extends boolean
            ? False | True
            : // eslint-disable-next-line typescript/no-invalid-void-type
              T extends void | null | undefined
              ? True
              : never
