/**
 * Defines an intersection type of all union items.
 */

export type Intersection<U> = (
  U extends any ? (argument: U) => any : never
) extends (argument: infer I) => void
  ? I
  : never
