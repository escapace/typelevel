import { Cons } from '../list/prepend'

/**
 * Get the N-th argument of a function.
 */
export type Argument<
  T extends (...args: any[]) => any,
  N extends number
> = T extends (...args: infer U) => any ? Cons<never, U>[N] : never
