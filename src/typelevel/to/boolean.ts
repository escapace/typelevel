import { False, True } from '../boolean-algebra/index'

export type Boolean<T extends False | True> = {
  '1': true
  '0': false
}[T]
