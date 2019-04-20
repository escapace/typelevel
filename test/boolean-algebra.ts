import { TL } from '@escapace/interface'

// $ExpectType "0"
export type A1 = TL.And<TL.False, TL.False>
// $ExpectType "0"
export type A2 = TL.And<TL.True, TL.False>
// $ExpectType "0"
export type A3 = TL.And<TL.False, TL.True>
// $ExpectType "1"
export type A4 = TL.And<TL.True, TL.True>

// $ExpectType "0"
export type B1 = TL.Or<TL.False, TL.False>
// $ExpectType "1"
export type B2 = TL.Or<TL.True, TL.False>
// $ExpectType "1"
export type B3 = TL.Or<TL.False, TL.True>
// $ExpectType "1"
export type B4 = TL.Or<TL.True, TL.True>

// $ExpectType "0"
export type C1 = TL.Not<TL.True>
// $ExpectType "1"
export type C2 = TL.Not<TL.False>

// $ExpectType "1"
export type D1 = TL.Implication<TL.False, TL.False>
// $ExpectType "0"
export type D2 = TL.Implication<TL.True, TL.False>
// $ExpectType "1"
export type D3 = TL.Implication<TL.False, TL.True>
// $ExpectType "1"
export type D4 = TL.Implication<TL.True, TL.True>

// $ExpectType "0"
export type E1 = TL.Xor<TL.False, TL.False>
// $ExpectType "1"
export type E2 = TL.Xor<TL.True, TL.False>
// $ExpectType "1"
export type E3 = TL.Xor<TL.False, TL.True>
// $ExpectType "0"
export type E4 = TL.Xor<TL.True, TL.True>

// $ExpectType "1"
export type F1 = TL.Equivalence<TL.False, TL.False>
// $ExpectType "0"
export type F2 = TL.Equivalence<TL.True, TL.False>
// $ExpectType "0"
export type F3 = TL.Equivalence<TL.False, TL.True>
// $ExpectType "1"
export type F4 = TL.Equivalence<TL.True, TL.True>

// // $ExpectType "1"
// export type I1 = Bool.StrongEquivalence<Bool.False, Bool.False>
// // $ExpectType "0"
// export type I2 = Bool.StrongEquivalence<Bool.True, Bool.False>
// // $ExpectType "0"
// export type I3 = Bool.StrongEquivalence<Bool.False, Bool.True>
// // $ExpectType "1"
// export type I4 = Bool.StrongEquivalence<Bool.True, Bool.True>

// // $ExpectType "0"
// export type I5 = Bool.StrongEquivalence<Bool.True | Bool.False, Bool.False>
// // $ExpectType "0"
// export type I6 = Bool.StrongEquivalence<Bool.False | Bool.True, Bool.True>
// // $ExpectType "0"
// export type I7 = Bool.StrongEquivalence<Bool.True, Bool.False | Bool.True>
// // $ExpectType "0"
// export type I8 = Bool.StrongEquivalence<Bool.False, Bool.True | Bool.False>

// // $ExpectType "1"
// export type I00 = Bool.StrongEquivalence<
//   Bool.False | Bool.True,
//   Bool.True | Bool.False
// >
