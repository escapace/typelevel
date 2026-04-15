import type $ from '@escapace/typelevel'
import { expectAssignable, expectType } from 'tsd'

expectType<$.Assert.False<$.False>>(1)
expectType<$.Assert.True<$.True>>(1)

// $ExpectType "0"
expectType<$.And<$.False, $.False>>(0)
// $ExpectType "0"
expectType<$.And<$.True, $.False>>(0)
// $ExpectType "0"
expectType<$.And<$.False, $.True>>(0)
// $ExpectType "1"
expectType<$.And<$.True, $.True>>(1)

// $ExpectType "0"
expectType<$.Or<$.False, $.False>>(0)
// $ExpectType "1"
expectType<$.Or<$.True, $.False>>(1)
// $ExpectType "1"
expectType<$.Or<$.False, $.True>>(1)
// $ExpectType "1"
expectType<$.Or<$.True, $.True>>(1)

// $ExpectType "0"
expectType<$.Not<$.True>>(0)
// $ExpectType "1"
expectType<$.Not<$.False>>(1)

// $ExpectType "1"
expectType<$.Implication<$.False, $.False>>(1)
// $ExpectType "0"
expectType<$.Implication<$.True, $.False>>(0)
// $ExpectType "1"
expectType<$.Implication<$.False, $.True>>(1)
// $ExpectType "1"
expectType<$.Implication<$.True, $.True>>(1)

// $ExpectType "0"
expectType<$.Xor<$.False, $.False>>(0)
// $ExpectType "1"
expectType<$.Xor<$.True, $.False>>(1)
// $ExpectType "1"
expectType<$.Xor<$.False, $.True>>(1)
// $ExpectType "0"
expectType<$.Xor<$.True, $.True>>(0)

// $ExpectType "1"
expectType<$.Equivalence<$.False, $.False>>(1)
// $ExpectType "0"
expectType<$.Equivalence<$.True, $.False>>(0)
// $ExpectType "0"
expectType<$.Equivalence<$.False, $.True>>(0)
// $ExpectType "1"
expectType<$.Equivalence<$.True, $.True>>(1)

// // $ExpectType "1"
// expectType<Bool.StrongEquivalence<Bool.False, Bool.False>
// // $ExpectType "0"
// expectType<Bool.StrongEquivalence<Bool.True, Bool.False>
// // $ExpectType "0"
// expectType<Bool.StrongEquivalence<Bool.False, Bool.True>
// // $ExpectType "1"
// expectType<Bool.StrongEquivalence<Bool.True, Bool.True>

// // $ExpectType "0"
// expectType<Bool.StrongEquivalence<Bool.True | Bool.False, Bool.False>
// // $ExpectType "0"
// expectType<Bool.StrongEquivalence<Bool.False | Bool.True, Bool.True>
// // $ExpectType "0"
// expectType<Bool.StrongEquivalence<Bool.True, Bool.False | Bool.True>
// // $ExpectType "0"
// expectType<Bool.StrongEquivalence<Bool.False, Bool.True | Bool.False>

// // $ExpectType "1"
// export type I00 = Bool.StrongEquivalence<
//   Bool.False | Bool.True,
//   Bool.True | Bool.False
// >

export type FA0 = () => null
export type FA1 = (a: number) => null
export type FA2 = (a: number, b: string) => null
export type FA3 = (a: number, b: string, c: boolean) => null

expectType([])
expectType([1])
expectType([1, 'qwe'])
expectAssignable<$.Arguments<FA3>>([1, 'qwe', false])

expectType<$.Is.Never<$.Argument<FA0, 0>>>(1)
expectAssignable(1)
expectAssignable('sfqwe')
expectAssignable(true)
expectAssignable(undefined)

// $ExpectType "1"
expectType<$.Equal<$.Head<[1]>, 1>>(1)
// $ExpectType "1"
expectType<$.Equal<$.Head<[1, 2, 3]>, 1>>(1)
// $ExpectType "1"
expectType<$.Equal<$.Head<[1, 2, 3], null>, 1>>(1)
// $ExpectType "1"
expectType<$.Equal<$.Head<[]>, never>>(1)
// $ExpectType "1"
expectType<$.Equal<$.Head<[], null>, null>>(1)

// $ExpectType "1"
expectType<$.Equal<$.Tail<[]>, []>>(1)
// $ExpectType "1"
expectType<$.Equal<$.Tail<[1]>, []>>(1)
// $ExpectType "1"
expectType<$.Equal<$.Tail<[1, 2, 3]>, [2, 3]>>(1)

// $ExpectType "1"
expectType<$.Equal<$.Last<[1]>, 1>>(1)
// $ExpectType "1"
expectType<$.Equal<$.Last<[1, 2, 3]>, 3>>(1)
// $ExpectType "1"
expectType<$.Equal<$.Last<[1, 2, 3]>, 3>>(1)
// $ExpectType "1"
expectType<$.Equal<$.Last<[]>, never>>(1)
// $ExpectType "1"
expectType<$.Equal<$.Last<[undefined]>, undefined>>(1)
// // $ExpectType "1"
expectType<$.Equal<$.Last<number[]>, number | undefined>>(1)
// $ExpectType "1"
expectType<$.Equal<$.First<[]>, never>>(1)

// $ExpectType "1"
expectType<$.Equal<$.Append<1, [4]>, [4, 1]>>(1)
// $ExpectType "1"
expectType<$.Equal<$.Append<1, [2, 3]>, [2, 3, 1]>>(1)

// $ExpectType "1"
expectType<$.Equal<$.Prepend<1, []>, [1]>>(1)
// $ExpectType "1"
expectType<$.Equal<$.Prepend<1, [2, 3]>, [1, 2, 3]>>(1)

// $ExpectType "1"
expectType<$.Equal<$.Reverse<[]>, []>>(1)
// $ExpectType "1"
expectType<$.Equal<$.Reverse<[1]>, [1]>>(1)
// $ExpectType "1"
expectType<$.Equal<$.Reverse<[1, 2, 3]>, [3, 2, 1]>>(1)

// $ExpectType "1"
expectType<$.Equal<$.Concat<[], []>, []>>(1)
// $ExpectType "1"
expectType<$.Equal<$.Concat<[], [1]>, [1]>>(1)
// $ExpectType "1"
expectType<$.Equal<$.Concat<[1], []>, [1]>>(1)
// $ExpectType "1"
expectType<$.Equal<$.Concat<[1, 2, 3], [4, 5]>, [1, 2, 3, 4, 5]>>(1)

// $ExpectType "1"
expectType<$.Equal<$.Zip<[], []>, []>>(1)
// $ExpectType "1"
expectType<$.Equal<$.Zip<[], [1]>, []>>(1)
// $ExpectType "1"
expectType<$.Equal<$.Zip<[1], []>, []>>(1)
// $ExpectType "1"
expectType<$.Equal<$.Zip<[1, 2], [4, 5]>, [[1, 4], [2, 5]]>>(1)
// $ExpectType "1"
expectType<$.Equal<$.Zip<[1, 2, 3], [4, 5]>, [[1, 4], [2, 5]]>>(1)

// $ExpectType "1"
expectType<$.Equal<$.Take<0, []>, []>>(1)
// $ExpectType "1"
expectType<$.Equal<$.Take<0, [1]>, []>>(1)
// $ExpectType "1"
expectType<$.Equal<$.Take<2, []>, []>>(1)
// $ExpectType "1"
expectType<$.Equal<$.Take<2, [1, 2, 3]>, [1, 2]>>(1)
// $ExpectType "1"
expectType<$.Equal<$.Take<3, [1, 2, 3]>, [1, 2, 3]>>(1)
// $ExpectType "1"
expectType<$.Equal<$.Take<5, [1, 2, 3]>, [1, 2, 3]>>(1)

// expectType<T.Equal<Tuple.Group<2, []>, []>
// expectType<T.Equal<Tuple.Group<2, [1]>, [[1]]>
// expectType<T.Equal<Tuple.Group<2, [1, 2, 3, 4]>, [[1, 2], [3, 4]]>
// expectType<T.Equal<Tuple.Group<3, [1, 2, 3, 4]>, [[1, 2, 3], [4]]>

// $ExpectType "1"
expectType<$.Equal<$.Drop<0, []>, []>>(1)
// $ExpectType "1"
expectType<$.Equal<$.Drop<0, [1]>, [1]>>(1)
// $ExpectType "1"
expectType<$.Equal<$.Drop<2, []>, []>>(1)
// $ExpectType "1"
expectType<$.Equal<$.Drop<2, [1, 2, 3]>, [3]>>(1)
// $ExpectType "1"
expectType<$.Equal<$.Drop<3, [1, 2, 3]>, []>>(1)
// $ExpectType "1"
expectType<$.Equal<$.Drop<5, [1, 2, 3]>, []>>(1)

// $ExpectType "1"
expectType<$.Equal<$.Flatten<[]>, []>>(1)
// $ExpectType "1"
expectType<$.Equal<$.Flatten<[[]]>, []>>(1)
// $ExpectType "1"
expectType<$.Equal<$.Flatten<[[], [1]]>, [1]>>(1)
// $ExpectType "1"
expectType<$.Equal<$.Flatten<[[1], []]>, [1]>>(1)
// $ExpectType "1"
expectType<$.Equal<$.Flatten<[[1, 2, 3], [4, 5]]>, [1, 2, 3, 4, 5]>>(1)
// $ExpectType "1"
expectType<$.Equal<$.Flatten<[[1, 2], [3, 4]]>, [1, 2, 3, 4]>>(1)
// $ExpectType "1"
expectType<$.Equal<$.Flatten<[[1, 2], [], [3, 4]]>, [1, 2, 3, 4]>>(1)
// $ExpectType "1"
expectType<$.Equal<$.Flatten<[[1, 2], [], [3, 4]]>, [1, 2, 3, 4]>>(1)

// // $ExpectType "1"
// expectType<TL.Equal<TL.Flatten<string[][][]>, string[]>

// $ExpectType "1"
expectType<$.Equal<$.Repeat<1, 0>, []>>(1)
// $ExpectType "1"
expectType<$.Equal<$.Repeat<1, 1>, [1]>>(1)
// $ExpectType "1"
expectType<$.Equal<$.Repeat<1, 5>, [1, 1, 1, 1, 1]>>(1)

// expectType<T.Equal<Tuple.Range<0, 0>, [0]>
// expectType<T.Equal<Tuple.Range<2, 5>, [2, 3, 4, 5]>

// $ExpectType "1"
expectType<$.Equal<$.Union<'1', '2' | '3'>, '1' | '2' | '3'>>(1)

// $ExpectType "1"
expectType<$.Equal<$.Complement<'1' | '2' | '3', '2' | '3'>, '1'>>(1)

// $ExpectType "1"
expectType<$.Equal<$.Difference<'1' | '2' | '3', '2' | '3' | '4'>, '1'>>(1)

// $ExpectType "1"
expectType<$.Equal<$.Intersection<'1' | '2' | '3' | '5', '2' | '3' | '4' | '6'>, '2' | '3'>>(1)

// $ExpectType "1"
expectType<$.Equal<$.SymmetricDifference<'1' | '2' | '3', '2' | '3' | '4'>, '1' | '4'>>(1)

// $ExpectType "1"
expectType<$.Equal<$.SymmetricDifference<'1' | '2' | '3', '3' | '4'>, '1' | '2' | '4'>>(1)

// $ExpectType "1"
expectType<$.Assert.False<$.Contains<'1' | '2' | '3', '3' | '4'>>>(1)

// $ExpectType "1"
expectType<$.Assert.True<$.Contains<'1' | '2' | '3', '3'>>>(1)

// $ExpectType "1"
expectType<$.Assert.False<$.Contains<'3', '3' | '4'>>>(1)

// $ExpectType "1"
expectType<$.Assert.True<$.Contains<'3', '3'>>>(1)

// $ExpectType "1"
expectType<$.Has<'a' | 'b', 'a' | 'b' | 'c'>>(1)

// $ExpectType "1"
expectType<$.Has<'b', 'a' | 'b' | 'c'>>(1)

// $ExpectType "0"
expectType<$.Has<'d' | 'f', 'a' | 'b' | 'c'>>(0)

// $ExpectType "1"
expectType<$.Has<'c' | 'f', 'a' | 'b' | 'c'>>(1)

/* eslint-disable typescript/no-invalid-void-type */

expectType<$.Is.Never<never>>(1)
expectType<$.Is.Never<any>>(0)
expectType<$.Is.Never<unknown>>(0)
expectType<$.Is.Never<'abcd'>>(0)

expectType<$.Is.Any<never>>(0)
expectType<$.Is.Any<any>>(1)
expectType<$.Is.Any<unknown>>(0)
expectType<$.Is.Any<'abcd'>>(0)

expectType<$.Is.Unknown<never>>(0)
expectType<$.Is.Unknown<any>>(0)
expectType<$.Is.Unknown<unknown>>(1)
expectType<$.Is.Unknown<'abcd'>>(0)

expectType<$.Is.Never<$.Is.Falsy<never>>>(1)
expectType<$.Is.Falsy<'' | 0 | false | null | undefined | void>>(1)
expectType<$.Is.Falsy<0>>(1)
expectType<$.Equal<$.Is.Falsy<number>, 0 | 1>>(1)
expectType<$.Is.Falsy<''>>(1)
expectType<$.Equal<$.Is.Falsy<string>, 0 | 1>>(1)
expectType<$.Is.Falsy<false>>(1)
expectType<$.Equal<$.Is.Falsy<boolean>, 0 | 1>>(1)
expectType<$.Equal<$.Is.Falsy<boolean | number | string>, 0 | 1>>(1)
expectType<$.Is.Falsy<null | undefined | void>>(1)

expectType<$.Is.Never<$.Is.Truthy<never>>>(1)
expectType<$.Is.Truthy<'' | 0 | false | null | undefined | void>>(0)
expectType<$.Is.Truthy<0>>(0)
expectType<$.Equal<$.Is.Truthy<number>, 0 | 1>>(1)
expectType<$.Is.Truthy<''>>(0)
expectType<$.Equal<$.Is.Truthy<string>, 0 | 1>>(1)
expectType<$.Is.Truthy<false>>(0)
expectType<$.Equal<$.Is.Truthy<boolean>, 0 | 1>>(1)
expectType<$.Equal<$.Is.Truthy<boolean | number | string>, 0 | 1>>(1)
expectType<$.Is.Truthy<null | undefined | void>>(0)

expectType<$.Is.Primitive<'abcd'>>(1)
expectType<$.Is.Primitive<2>>(1)
expectType<$.Is.Primitive<false>>(1)
expectType<$.Is.Primitive<symbol>>(1)
expectType<$.Is.Primitive<{}>>(0)

expectType<$.Is.String<'abcd'>>(1)
expectType<$.Is.String<{}>>(0)

expectType<$.Is.Number<1>>(1)
expectType<$.Is.Number<{}>>(0)

expectType<$.Is.Boolean<true>>(1)
expectType<$.Is.Boolean<{}>>(0)

expectType<$.Is.Symbol<symbol>>(1)
expectType<$.Is.Symbol<{}>>(0)

// // $ExpectType "1"
// expectType<T.Is.Determinate<Bool.True>
// // $ExpectType "1"
// expectType<T.Is.Determinate<Bool.False>
// // $ExpectType "0"
// expectType<T.Is.Determinate<Bool.True | Bool.False>

// // $ExpectType "0"
// expectType<T.Is.Indeterminate<Bool.True>
// // $ExpectType "0"
// expectType<T.Is.Indeterminate<Bool.False>
// // $ExpectType "1"
// expectType<T.Is.Indeterminate<Bool.True | Bool.False>

expectType<$.Equal<unknown, unknown>>(1)
expectType<$.Equal<unknown, any>>(0)
expectType<$.Equal<unknown, never>>(0)
expectType<$.Equal<unknown, 'abcd'>>(0)

expectType<$.Equal<any, unknown>>(0)
expectType<$.Equal<any, any>>(1)
expectType<$.Equal<any, never>>(0)
expectType<$.Equal<any, 'abcd'>>(0)

expectType<$.Equal<never, unknown>>(0)
expectType<$.Equal<never, any>>(0)
expectType<$.Equal<never, never>>(1)
expectType<$.Equal<never, 'abcd'>>(0)

expectType<$.Equal<'abcd', unknown>>(0)
expectType<$.Equal<'abcd', any>>(0)
expectType<$.Equal<'abcd', never>>(0)
expectType<$.Equal<'abcd', 'abcd'>>(1)

expectType<$.Equal<string, number | string>>(0)

type example = 'example'

declare module '@escapace/typelevel/lib/types/hkt.d.ts' {
  interface URI2HKT<A> {
    example: [A]
  }

  interface URI2HKT2<A, B> {
    example: [A, B]
  }

  interface URI2HKT3<A, B, C> {
    example: [A, B, C]
  }

  interface URI2HKT4<A, B, C, D> {
    example: [A, B, C, D]
  }
}

expectType<$.Equal<$.Type<example, 1>, [1]>>(1)
expectType<$.Equal<$.Type2<example, 1, 2>, [1, 2]>>(1)
expectType<$.Equal<$.Type3<example, 1, 2, 3>, [1, 2, 3]>>(1)
expectType<$.Equal<$.Type4<example, 1, 2, 3, 4>, [1, 2, 3, 4]>>(1)
