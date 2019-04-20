/**
 * Defines an intersection type of all union items.
 */
export type Intersection<U> = (U extends any
  ? (k: U) => void
  : never) extends ((k: infer I) => void)
  ? I
  : never
