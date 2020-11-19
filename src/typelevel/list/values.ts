/**
 * Returns a union of list elements
 */
export type Values<T extends ArrayLike<any>> = T extends ArrayLike<infer U>
  ? U
  : never
