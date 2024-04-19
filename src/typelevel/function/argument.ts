import type { Cons } from '../list/prepend'

/**
 * Get the N-th argument of a function.
 */
export type Argument<
  T extends (...arguments_: any[]) => any,
  N extends number
> = T extends (...arguments_: infer U) => any ? Cons<never, U>[N] : never
