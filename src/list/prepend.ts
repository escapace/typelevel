/**
 * Adds A to the beginning of the list B and returns the new list.
 */
export type Prepend<A, B extends any[]> = [A, ...B]

/**
 * Adds A to the beginning of the list B and returns the new list.
 */
export type Cons<A, B extends any[]> = Prepend<A, B>
