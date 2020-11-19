/**
 * Adds A to the end of the list B and returns the new list.
 */
export type Append<A, B extends any[]> = [...B, A]
