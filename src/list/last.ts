import type { If } from '../type/if'
import type { Unknown } from '../is/unknown'
import type { List } from './list'

type LU<T extends List> = T extends readonly [...infer _, infer U]
  ? U
  : T extends readonly [...infer _, (infer U)?]
    ? U | undefined
    : undefined

export type Last<T extends List, U = LU<T>> = If<Unknown<U>, never, U>
