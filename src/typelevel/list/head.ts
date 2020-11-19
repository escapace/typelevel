import { List } from './list'

/**
 * Gets the first element of list T.
 */
export type Head<T extends List, D = never> = T extends [infer X, ...List]
  ? X
  : D

/**
 * Gets the first element of list T.
 */
export type First<T extends List, D = never> = Head<T, D>
