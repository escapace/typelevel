import { Tail } from './tail'
import { Cons } from './prepend'
import { Head } from './head'

export type Reverse<L extends any[], X extends any[] = []> = {
  0: X
  1: Reverse<Tail<L>, Cons<Head<L>, X>>
}[L extends [] ? 0 : 1]
