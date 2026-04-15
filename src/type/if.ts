import type { False, True } from '../boolean-algebra/values'

export type If<T extends False | True, Then, Else = never> = {
  0: Else
  1: Then
}[T]
