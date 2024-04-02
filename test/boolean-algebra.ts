import TL from '@escapace/typelevel'
import { expectType } from 'tsd'

// $ExpectType "0"
expectType<TL.And<TL.False, TL.False>>('0')
// $ExpectType "0"
expectType<TL.And<TL.True, TL.False>>('0')
// $ExpectType "0"
expectType<TL.And<TL.False, TL.True>>('0')
// $ExpectType "1"
expectType<TL.And<TL.True, TL.True>>('1')

// $ExpectType "0"
expectType<TL.Or<TL.False, TL.False>>('0')
// $ExpectType "1"
expectType<TL.Or<TL.True, TL.False>>('1')
// $ExpectType "1"
expectType<TL.Or<TL.False, TL.True>>('1')
// $ExpectType "1"
expectType<TL.Or<TL.True, TL.True>>('1')

// $ExpectType "0"
expectType<TL.Not<TL.True>>('0')
// $ExpectType "1"
expectType<TL.Not<TL.False>>('1')

// $ExpectType "1"
expectType<TL.Implication<TL.False, TL.False>>('1')
// $ExpectType "0"
expectType<TL.Implication<TL.True, TL.False>>('0')
// $ExpectType "1"
expectType<TL.Implication<TL.False, TL.True>>('1')
// $ExpectType "1"
expectType<TL.Implication<TL.True, TL.True>>('1')

// $ExpectType "0"
expectType<TL.Xor<TL.False, TL.False>>('0')
// $ExpectType "1"
expectType<TL.Xor<TL.True, TL.False>>('1')
// $ExpectType "1"
expectType<TL.Xor<TL.False, TL.True>>('1')
// $ExpectType "0"
expectType<TL.Xor<TL.True, TL.True>>('0')

// $ExpectType "1"
expectType<TL.Equivalence<TL.False, TL.False>>('1')
// $ExpectType "0"
expectType<TL.Equivalence<TL.True, TL.False>>('0')
// $ExpectType "0"
expectType<TL.Equivalence<TL.False, TL.True>>('0')
// $ExpectType "1"
expectType<TL.Equivalence<TL.True, TL.True>>('1')

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
