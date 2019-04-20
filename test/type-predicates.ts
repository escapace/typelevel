import { TL } from '@escapace/interface'

// $ExpectType "1"
export type A1 = TL.Is.Never<never>
// $ExpectType "0"
export type A2 = TL.Is.Never<any>
// $ExpectType "0"
export type A3 = TL.Is.Never<unknown>
// $ExpectType "0"
export type A4 = TL.Is.Never<'abcd'>

// $ExpectType "0"
export type B1 = TL.Is.Any<never>
// $ExpectType "1"
export type B2 = TL.Is.Any<any>
// $ExpectType "0"
export type B3 = TL.Is.Any<unknown>
// $ExpectType "0"
export type B4 = TL.Is.Any<'abcd'>

// $ExpectType "0"
export type C1 = TL.Is.Unknown<never>
// $ExpectType "0"
export type C2 = TL.Is.Unknown<any>
// $ExpectType "1"
export type C3 = TL.Is.Unknown<unknown>
// $ExpectType "0"
export type C4 = TL.Is.Unknown<'abcd'>

// $ExpectType never
export type D0 = TL.Is.Falsy<never>
// $ExpectType "1"
export type D1 = TL.Is.Falsy<undefined | null | 0 | '' | false | void>
// $ExpectType "1"
export type D2 = TL.Is.Falsy<0>
// $ExpectType "1"
export type D3 = TL.Equal<TL.Is.Falsy<number>, '0' | '1'>
// $ExpectType "1"
export type D4 = TL.Is.Falsy<''>
// $ExpectType "1"
export type D5 = TL.Equal<TL.Is.Falsy<string>, '0' | '1'>
// $ExpectType "1"
export type D6 = TL.Is.Falsy<false>
// $ExpectType "1"
export type D7 = TL.Equal<TL.Is.Falsy<boolean>, '0' | '1'>
// $ExpectType "1"
export type D8 = TL.Equal<TL.Is.Falsy<string | number | boolean>, '0' | '1'>
// $ExpectType "1"
export type D9 = TL.Is.Falsy<undefined | null | void>

// $ExpectType never
export type E0 = TL.Is.Truthy<never>
// $ExpectType "0"
export type E1 = TL.Is.Truthy<undefined | null | 0 | '' | false | void>
// $ExpectType "0"
export type E2 = TL.Is.Truthy<0>
// $ExpectType "1"
export type E3 = TL.Equal<TL.Is.Truthy<number>, '0' | '1'>
// $ExpectType "0"
export type E4 = TL.Is.Truthy<''>
// $ExpectType "1"
export type E5 = TL.Equal<TL.Is.Truthy<string>, '0' | '1'>
// $ExpectType "0"
export type E6 = TL.Is.Truthy<false>
// $ExpectType "1"
export type E7 = TL.Equal<TL.Is.Truthy<boolean>, '0' | '1'>
// $ExpectType "1"
export type E8 = TL.Equal<TL.Is.Truthy<string | number | boolean>, '0' | '1'>
// $ExpectType "0"
export type E9 = TL.Is.Truthy<undefined | null | void>

// $ExpectType "1"
export type F1 = TL.Is.Primitive<'abcd'>
// $ExpectType "1"
export type F2 = TL.Is.Primitive<2>
// $ExpectType "1"
export type F3 = TL.Is.Primitive<false>
// $ExpectType "1"
export type F4 = TL.Is.Primitive<symbol>
// $ExpectType "0"
export type F5 = TL.Is.Primitive<{}>

// $ExpectType "1"
export type G1 = TL.Is.String<'abcd'>
// $ExpectType "0"
export type G2 = TL.Is.String<{}>

// $ExpectType "1"
export type H1 = TL.Is.Number<1>
// $ExpectType "0"
export type H2 = TL.Is.Number<{}>

// $ExpectType "1"
export type I1 = TL.Is.Boolean<true>
// $ExpectType "0"
export type I2 = TL.Is.Boolean<{}>

// $ExpectType "1"
export type J1 = TL.Is.Symbol<symbol>
// $ExpectType "0"
export type J2 = TL.Is.Symbol<{}>

// // $ExpectType "1"
// export type G1 = T.Is.Determinate<Bool.True>
// // $ExpectType "1"
// export type G2 = T.Is.Determinate<Bool.False>
// // $ExpectType "0"
// export type G3 = T.Is.Determinate<Bool.True | Bool.False>

// // $ExpectType "0"
// export type H1 = T.Is.Indeterminate<Bool.True>
// // $ExpectType "0"
// export type H2 = T.Is.Indeterminate<Bool.False>
// // $ExpectType "1"
// export type H3 = T.Is.Indeterminate<Bool.True | Bool.False>
