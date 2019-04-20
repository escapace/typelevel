import { Difference } from './difference'

/**
 * Returns a set of all elements in the given universal set A that are not in
 * B.
 */
export type Complement<A, B extends A> = Difference<A, B>
