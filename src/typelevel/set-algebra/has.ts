import type { Not } from '../boolean-algebra/not'
import type { Never } from '../is/never'

/**
 * Returns True if B has any value in A.
 */
export type Has<A, B> = Not<Never<Extract<A, B>>>
