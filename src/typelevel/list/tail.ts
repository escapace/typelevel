import { List } from './list'

/**
 * Returns all but the first element of the list.
 */
export type Tail<L extends List> = L extends readonly [any, ...infer LTail]
  ? LTail
  : L
