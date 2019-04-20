/**
 * Adds A to the beginning of the tuple B and returns the new tuple.
 */
export type Cons<A, B extends any[]> = ((h: A, ...args: B) => void) extends ((
  ...args: infer R
) => void)
  ? R
  : []
