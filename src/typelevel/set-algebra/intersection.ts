/**
 * Returns a set that contains all of the elements that are in both sets.
 */
export type Intersection<A, B> = Extract<A, B>
