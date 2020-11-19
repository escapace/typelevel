/**
 * Defines an intersection type of all union items.
 */

export type Intersection<U> = (
  U extends any ? (arg: U) => any : never
) extends (arg: infer I) => void
  ? I
  : never
