import TL from '@escapace/typelevel'

// $ExpectType "1"
export type A1 = TL.Equal<unknown, unknown>
// $ExpectType "0"
export type A2 = TL.Equal<unknown, any>
// $ExpectType "0"
export type A3 = TL.Equal<unknown, never>
// $ExpectType "0"
export type A4 = TL.Equal<unknown, 'abcd'>

// $ExpectType "0"
export type B1 = TL.Equal<any, unknown>
// $ExpectType "1"
export type B2 = TL.Equal<any, any>
// $ExpectType "0"
export type B3 = TL.Equal<any, never>
// $ExpectType "0"
export type B4 = TL.Equal<any, 'abcd'>

// $ExpectType "0"
export type C1 = TL.Equal<never, unknown>
// $ExpectType "0"
export type C2 = TL.Equal<never, any>
// $ExpectType "1"
export type C3 = TL.Equal<never, never>
// $ExpectType "0"
export type C4 = TL.Equal<never, 'abcd'>

// $ExpectType "0"
export type D1 = TL.Equal<'abcd', unknown>
// $ExpectType "0"
export type D2 = TL.Equal<'abcd', any>
// $ExpectType "0"
export type D3 = TL.Equal<'abcd', never>
// $ExpectType "1"
export type D4 = TL.Equal<'abcd', 'abcd'>

// $ExpectType "0"
export type E1 = TL.Equal<string, number | string>

type example = 'example'

declare module '../src/hkt' {
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

// $ExpectType "1"
export type F1 = TL.Equal<TL.Type<example, 1>, [1]>
// $ExpectType "1"
export type F2 = TL.Equal<TL.Type2<example, 1, 2>, [1, 2]>
// $ExpectType "1"
export type F3 = TL.Equal<TL.Type3<example, 1, 2, 3>, [1, 2, 3]>
// $ExpectType "1"
export type F4 = TL.Equal<TL.Type4<example, 1, 2, 3, 4>, [1, 2, 3, 4]>
