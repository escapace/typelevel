import { False, True } from '../boolean-algebra/values'

/**
 * Asserts strict equality of A and B.
 */
export type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends <
  T
>() => T extends B ? 1 : 2
  ? True
  : False

// import { Unknown } from '../is/unknown'
// import { Or } from '../boolean-algebra/or'
// import { Not } from '../boolean-algebra/not'
// import { Never } from '../is/never'
// import { ComparableSymmetricExtends } from '../internal/comparable-symmetric-extends'
// import { Any } from '../is/any'
// import { And } from '../boolean-algebra/and'

// // prettier-ignore
// export type Equals<A, B> = Or<
//   Or<
//     And<Any<A>, Any<B>>,
//     Or<
//       And<Never<A>, Never<B>>,
//       And<Unknown<A>, Unknown<B>>
//     >
//   >,
//   And<
//     And<Not<Any<A>>, Not<Any<B>>>,
//     ComparableSymmetricExtends<A, B>
//   >
// >

// type A1 = Equals<any, string>
// type A1 = Eq<any, string>

// type A2 = Equals<any, any>
// type A2 = Eq<any, any>

// type A3 = Equals<string, string | number>
// type A3 = Eq<string, string | number>

// type A4 = Equals<string | number, string>
// type A4 = Eq<string | number, string>

// type A5 = Equals<unknown, string>
// type A5 = Eq<unknown, string>

// type A6 = Equals<unknown, any>
// type A6 = Eq<unknown, any>

// type A7 = Equals<unknown, never>
// type A7 = Eq<unknown, never>
