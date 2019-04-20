import { False, True } from './values'

/**
 * Returns False if T is True, and True if T is False.
 */
export type Not<T extends True | False> = {
  '1': False
  '0': True
}[T]
