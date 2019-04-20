/**
 * Returns all but the first element of the tuple.
 */
export type Tail<T extends any[]> = ((...x: T) => void) extends ((
  x: any,
  ...xs: infer XS
) => void)
  ? XS
  : never
