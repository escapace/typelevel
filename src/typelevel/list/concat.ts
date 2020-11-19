import { List } from './list'

/**
 * Returns a new list concatenating A and B
 */
export type Concat<A extends List, B extends List> = [...A, ...B]
