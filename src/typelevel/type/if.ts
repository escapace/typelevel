import { False, True } from '../boolean-algebra/values'

export type If<T extends True | False, Then, Else = never> = {
  '1': Then
  '0': Else
}[T]
