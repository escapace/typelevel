import { Difference } from '../set-algebra/difference'

export type Assign<T extends object, U extends object> = Pick<
  T,
  Difference<keyof T, keyof U>
> &
  U
