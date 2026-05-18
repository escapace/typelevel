import type $ from '@escapace/typelevel'
import { expect } from 'tstyche'

expect(1).type.toBe<$.Assert.False<$.False>>()
expect(1).type.toBe<$.Assert.True<$.True>>()

// $ExpectType "0"
expect(0).type.toBe<$.And<$.False, $.False>>()
// $ExpectType "0"
expect(0).type.toBe<$.And<$.True, $.False>>()
// $ExpectType "0"
expect(0).type.toBe<$.And<$.False, $.True>>()
// $ExpectType "1"
expect(1).type.toBe<$.And<$.True, $.True>>()

// $ExpectType "0"
expect(0).type.toBe<$.Or<$.False, $.False>>()
// $ExpectType "1"
expect(1).type.toBe<$.Or<$.True, $.False>>()
// $ExpectType "1"
expect(1).type.toBe<$.Or<$.False, $.True>>()
// $ExpectType "1"
expect(1).type.toBe<$.Or<$.True, $.True>>()

// $ExpectType "0"
expect(0).type.toBe<$.Not<$.True>>()
// $ExpectType "1"
expect(1).type.toBe<$.Not<$.False>>()

// $ExpectType "1"
expect(1).type.toBe<$.Implication<$.False, $.False>>()
// $ExpectType "0"
expect(0).type.toBe<$.Implication<$.True, $.False>>()
// $ExpectType "1"
expect(1).type.toBe<$.Implication<$.False, $.True>>()
// $ExpectType "1"
expect(1).type.toBe<$.Implication<$.True, $.True>>()

// $ExpectType "0"
expect(0).type.toBe<$.Xor<$.False, $.False>>()
// $ExpectType "1"
expect(1).type.toBe<$.Xor<$.True, $.False>>()
// $ExpectType "1"
expect(1).type.toBe<$.Xor<$.False, $.True>>()
// $ExpectType "0"
expect(0).type.toBe<$.Xor<$.True, $.True>>()

// $ExpectType "1"
expect(1).type.toBe<$.Equivalence<$.False, $.False>>()
// $ExpectType "0"
expect(0).type.toBe<$.Equivalence<$.True, $.False>>()
// $ExpectType "0"
expect(0).type.toBe<$.Equivalence<$.False, $.True>>()
// $ExpectType "1"
expect(1).type.toBe<$.Equivalence<$.True, $.True>>()

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

expect([]).type.toBe<never[]>()
expect([1]).type.toBe<number[]>()
expect([1, 'qwe']).type.toBe<Array<number | string>>()
expect([1, 'qwe', false] as [number, string, boolean]).type.toBeAssignableTo<$.Arguments<FA3>>()

expect(1).type.toBe<$.Is.Never<$.Argument<FA0, 0>>>()
expect(1).type.toBeAssignableTo<unknown>()
expect('sfqwe').type.toBeAssignableTo<unknown>()
expect(true).type.toBeAssignableTo<unknown>()
expect(undefined).type.toBeAssignableTo<unknown>()

// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Head<[1]>, 1>>()
// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Head<[1, 2, 3]>, 1>>()
// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Head<[1, 2, 3], null>, 1>>()
// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Head<[]>, never>>()
// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Head<[], null>, null>>()

// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Tail<[]>, []>>()
// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Tail<[1]>, []>>()
// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Tail<[1, 2, 3]>, [2, 3]>>()

// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Last<[1]>, 1>>()
// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Last<[1, 2, 3]>, 3>>()
// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Last<[1, 2, 3]>, 3>>()
// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Last<[]>, never>>()
// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Last<[undefined]>, undefined>>()
// // $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Last<number[]>, number | undefined>>()
// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.First<[]>, never>>()

// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Append<1, [4]>, [4, 1]>>()
// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Append<1, [2, 3]>, [2, 3, 1]>>()

// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Prepend<1, []>, [1]>>()
// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Prepend<1, [2, 3]>, [1, 2, 3]>>()

// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Reverse<[]>, []>>()
// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Reverse<[1]>, [1]>>()
// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Reverse<[1, 2, 3]>, [3, 2, 1]>>()

// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Concat<[], []>, []>>()
// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Concat<[], [1]>, [1]>>()
// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Concat<[1], []>, [1]>>()
// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Concat<[1, 2, 3], [4, 5]>, [1, 2, 3, 4, 5]>>()

// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Zip<[], []>, []>>()
// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Zip<[], [1]>, []>>()
// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Zip<[1], []>, []>>()
// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Zip<[1, 2], [4, 5]>, [[1, 4], [2, 5]]>>()
// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Zip<[1, 2, 3], [4, 5]>, [[1, 4], [2, 5]]>>()

// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Take<0, []>, []>>()
// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Take<0, [1]>, []>>()
// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Take<2, []>, []>>()
// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Take<2, [1, 2, 3]>, [1, 2]>>()
// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Take<3, [1, 2, 3]>, [1, 2, 3]>>()
// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Take<5, [1, 2, 3]>, [1, 2, 3]>>()

// expectType<T.Equal<Tuple.Group<2, []>, []>
// expectType<T.Equal<Tuple.Group<2, [1]>, [[1]]>
// expectType<T.Equal<Tuple.Group<2, [1, 2, 3, 4]>, [[1, 2], [3, 4]]>
// expectType<T.Equal<Tuple.Group<3, [1, 2, 3, 4]>, [[1, 2, 3], [4]]>

// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Drop<0, []>, []>>()
// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Drop<0, [1]>, [1]>>()
// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Drop<2, []>, []>>()
// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Drop<2, [1, 2, 3]>, [3]>>()
// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Drop<3, [1, 2, 3]>, []>>()
// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Drop<5, [1, 2, 3]>, []>>()

// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Flatten<[]>, []>>()
// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Flatten<[[]]>, []>>()
// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Flatten<[[], [1]]>, [1]>>()
// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Flatten<[[1], []]>, [1]>>()
// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Flatten<[[1, 2, 3], [4, 5]]>, [1, 2, 3, 4, 5]>>()
// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Flatten<[[1, 2], [3, 4]]>, [1, 2, 3, 4]>>()
// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Flatten<[[1, 2], [], [3, 4]]>, [1, 2, 3, 4]>>()
// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Flatten<[[1, 2], [], [3, 4]]>, [1, 2, 3, 4]>>()

// // $ExpectType "1"
// expectType<TL.Equal<TL.Flatten<string[][][]>, string[]>

// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Repeat<1, 0>, []>>()
// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Repeat<1, 1>, [1]>>()
// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Repeat<1, 5>, [1, 1, 1, 1, 1]>>()

// expectType<T.Equal<Tuple.Range<0, 0>, [0]>
// expectType<T.Equal<Tuple.Range<2, 5>, [2, 3, 4, 5]>

// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Union<'1', '2' | '3'>, '1' | '2' | '3'>>()

// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Complement<'1' | '2' | '3', '2' | '3'>, '1'>>()

// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.Difference<'1' | '2' | '3', '2' | '3' | '4'>, '1'>>()

// $ExpectType "1"
expect(1).type.toBe<
  $.Equal<$.Intersection<'1' | '2' | '3' | '5', '2' | '3' | '4' | '6'>, '2' | '3'>
>()

// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.SymmetricDifference<'1' | '2' | '3', '2' | '3' | '4'>, '1' | '4'>>()

// $ExpectType "1"
expect(1).type.toBe<$.Equal<$.SymmetricDifference<'1' | '2' | '3', '3' | '4'>, '1' | '2' | '4'>>()

// $ExpectType "1"
expect(1).type.toBe<$.Assert.False<$.Contains<'1' | '2' | '3', '3' | '4'>>>()

// $ExpectType "1"
expect(1).type.toBe<$.Assert.True<$.Contains<'1' | '2' | '3', '3'>>>()

// $ExpectType "1"
expect(1).type.toBe<$.Assert.False<$.Contains<'3', '3' | '4'>>>()

// $ExpectType "1"
expect(1).type.toBe<$.Assert.True<$.Contains<'3', '3'>>>()

// $ExpectType "1"
expect(1).type.toBe<$.Has<'a' | 'b', 'a' | 'b' | 'c'>>()

// $ExpectType "1"
expect(1).type.toBe<$.Has<'b', 'a' | 'b' | 'c'>>()

// $ExpectType "0"
expect(0).type.toBe<$.Has<'d' | 'f', 'a' | 'b' | 'c'>>()

// $ExpectType "1"
expect(1).type.toBe<$.Has<'c' | 'f', 'a' | 'b' | 'c'>>()

/* eslint-disable typescript/no-invalid-void-type */

expect(1).type.toBe<$.Is.Never<never>>()
expect(0).type.toBe<$.Is.Never<any>>()
expect(0).type.toBe<$.Is.Never<unknown>>()
expect(0).type.toBe<$.Is.Never<'abcd'>>()

expect(0).type.toBe<$.Is.Any<never>>()
expect(1).type.toBe<$.Is.Any<any>>()
expect(0).type.toBe<$.Is.Any<unknown>>()
expect(0).type.toBe<$.Is.Any<'abcd'>>()

expect(0).type.toBe<$.Is.Unknown<never>>()
expect(0).type.toBe<$.Is.Unknown<any>>()
expect(1).type.toBe<$.Is.Unknown<unknown>>()
expect(0).type.toBe<$.Is.Unknown<'abcd'>>()

expect(1).type.toBe<$.Is.Never<$.Is.Falsy<never>>>()
expect(1).type.toBe<$.Is.Falsy<'' | 0 | false | null | undefined | void>>()
expect(1).type.toBe<$.Is.Falsy<0>>()
expect(1).type.toBe<$.Equal<$.Is.Falsy<number>, 0 | 1>>()
expect(1).type.toBe<$.Is.Falsy<''>>()
expect(1).type.toBe<$.Equal<$.Is.Falsy<string>, 0 | 1>>()
expect(1).type.toBe<$.Is.Falsy<false>>()
expect(1).type.toBe<$.Equal<$.Is.Falsy<boolean>, 0 | 1>>()
expect(1).type.toBe<$.Equal<$.Is.Falsy<boolean | number | string>, 0 | 1>>()
expect(1).type.toBe<$.Is.Falsy<null | undefined | void>>()

expect(1).type.toBe<$.Is.Never<$.Is.Truthy<never>>>()
expect(0).type.toBe<$.Is.Truthy<'' | 0 | false | null | undefined | void>>()
expect(0).type.toBe<$.Is.Truthy<0>>()
expect(1).type.toBe<$.Equal<$.Is.Truthy<number>, 0 | 1>>()
expect(0).type.toBe<$.Is.Truthy<''>>()
expect(1).type.toBe<$.Equal<$.Is.Truthy<string>, 0 | 1>>()
expect(0).type.toBe<$.Is.Truthy<false>>()
expect(1).type.toBe<$.Equal<$.Is.Truthy<boolean>, 0 | 1>>()
expect(1).type.toBe<$.Equal<$.Is.Truthy<boolean | number | string>, 0 | 1>>()
expect(0).type.toBe<$.Is.Truthy<null | undefined | void>>()

expect(1).type.toBe<$.Is.Primitive<'abcd'>>()
expect(1).type.toBe<$.Is.Primitive<2>>()
expect(1).type.toBe<$.Is.Primitive<false>>()
expect(1).type.toBe<$.Is.Primitive<symbol>>()
expect(0).type.toBe<$.Is.Primitive<{}>>()

expect(1).type.toBe<$.Is.String<'abcd'>>()
expect(0).type.toBe<$.Is.String<{}>>()

expect(1).type.toBe<$.Is.Number<1>>()
expect(0).type.toBe<$.Is.Number<{}>>()

expect(1).type.toBe<$.Is.Boolean<true>>()
expect(0).type.toBe<$.Is.Boolean<{}>>()

expect(1).type.toBe<$.Is.Symbol<symbol>>()
expect(0).type.toBe<$.Is.Symbol<{}>>()

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

expect(1).type.toBe<$.Equal<unknown, unknown>>()
expect(0).type.toBe<$.Equal<unknown, any>>()
expect(0).type.toBe<$.Equal<unknown, never>>()
expect(0).type.toBe<$.Equal<unknown, 'abcd'>>()

expect(0).type.toBe<$.Equal<any, unknown>>()
expect(1).type.toBe<$.Equal<any, any>>()
expect(0).type.toBe<$.Equal<any, never>>()
expect(0).type.toBe<$.Equal<any, 'abcd'>>()

expect(0).type.toBe<$.Equal<never, unknown>>()
expect(0).type.toBe<$.Equal<never, any>>()
expect(1).type.toBe<$.Equal<never, never>>()
expect(0).type.toBe<$.Equal<never, 'abcd'>>()

expect(0).type.toBe<$.Equal<'abcd', unknown>>()
expect(0).type.toBe<$.Equal<'abcd', any>>()
expect(0).type.toBe<$.Equal<'abcd', never>>()
expect(1).type.toBe<$.Equal<'abcd', 'abcd'>>()

expect(0).type.toBe<$.Equal<string, number | string>>()

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

expect(1).type.toBe<$.Equal<$.Type<example, 1>, [1]>>()
expect(1).type.toBe<$.Equal<$.Type2<example, 1, 2>, [1, 2]>>()
expect(1).type.toBe<$.Equal<$.Type3<example, 1, 2, 3>, [1, 2, 3]>>()
expect(1).type.toBe<$.Equal<$.Type4<example, 1, 2, 3, 4>, [1, 2, 3, 4]>>()
