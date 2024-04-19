import type { False, True } from '../boolean-algebra/index'

export type Boolean<T extends False | True> = {
  0: false
  1: true
}[T]
