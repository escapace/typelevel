/**
 * Returns a union of tuple elements
 */
export type Values<T extends ArrayLike<any>> = T extends ArrayLike<infer U>
  ? U
  : never
