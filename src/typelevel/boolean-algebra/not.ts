import type { False, True } from './values'

/**
 * Returns False if T is True, and True if T is False.
 */
export type Not<T extends False | True> = {
  0: True
  1: False
}[T]
