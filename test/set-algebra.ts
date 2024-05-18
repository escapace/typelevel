import type TL from '@escapace/typelevel'
import { expectType } from 'tsd'

// $ExpectType "1"
expectType<TL.Equal<TL.Union<'1', '2' | '3'>, '1' | '2' | '3'>>(1)

// $ExpectType "1"
expectType<TL.Equal<TL.Complement<'1' | '2' | '3', '2' | '3'>, '1'>>(1)

// $ExpectType "1"
expectType<TL.Equal<TL.Difference<'1' | '2' | '3', '2' | '3' | '4'>, '1'>>(1)

// $ExpectType "1"
expectType<TL.Equal<TL.Intersection<'1' | '2' | '3' | '5', '2' | '3' | '4' | '6'>, '2' | '3'>>(1)

// $ExpectType "1"
expectType<TL.Equal<TL.SymmetricDifference<'1' | '2' | '3', '2' | '3' | '4'>, '1' | '4'>>(1)

// $ExpectType "1"
expectType<TL.Equal<TL.SymmetricDifference<'1' | '2' | '3', '3' | '4'>, '1' | '2' | '4'>>(1)

// $ExpectType "1"
expectType<TL.Assert.False<TL.Contains<'1' | '2' | '3', '3' | '4'>>>(1)

// $ExpectType "1"
expectType<TL.Assert.True<TL.Contains<'1' | '2' | '3', '3'>>>(1)

// $ExpectType "1"
expectType<TL.Assert.False<TL.Contains<'3', '3' | '4'>>>(1)

// $ExpectType "1"
expectType<TL.Assert.True<TL.Contains<'3', '3'>>>(1)

// $ExpectType "1"
expectType<TL.Has<'a' | 'b', 'a' | 'b' | 'c'>>(1)

// $ExpectType "1"
expectType<TL.Has<'b', 'a' | 'b' | 'c'>>(1)

// $ExpectType "0"
expectType<TL.Has<'d' | 'f', 'a' | 'b' | 'c'>>(0)

// $ExpectType "1"
expectType<TL.Has<'c' | 'f', 'a' | 'b' | 'c'>>(1)
