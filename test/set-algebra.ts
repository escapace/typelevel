import { TL } from '@escapace/interface'

// $ExpectType "1"
export type A1 = TL.Equal<TL.Union<'1', '2' | '3'>, '1' | '2' | '3'>

// $ExpectType "1"
export type B1 = TL.Equal<TL.Complement<'1' | '2' | '3', '2' | '3'>, '1'>

// $ExpectType "1"
export type C1 = TL.Equal<TL.Difference<'1' | '2' | '3', '2' | '3' | '4'>, '1'>

// $ExpectType "1"
export type D1 = TL.Equal<
  TL.Intersection<'1' | '2' | '3' | '5', '2' | '3' | '4' | '6'>,
  '2' | '3'
>

// $ExpectType "1"
export type E1 = TL.Equal<
  TL.SymmetricDifference<'1' | '2' | '3', '2' | '3' | '4'>,
  '1' | '4'
>

// $ExpectType "1"
export type E2 = TL.Equal<
  TL.SymmetricDifference<'1' | '2' | '3', '3' | '4'>,
  '1' | '2' | '4'
>

// $ExpectType "1"
export type F1 = TL.Assert.False<TL.Contains<'1' | '2' | '3', '3' | '4'>>

// $ExpectType "1"
export type F2 = TL.Assert.True<TL.Contains<'1' | '2' | '3', '3'>>

// $ExpectType "1"
export type F3 = TL.Assert.False<TL.Contains<'3', '3' | '4'>>

// $ExpectType "1"
export type F4 = TL.Assert.True<TL.Contains<'3', '3'>>

// $ExpectType "1"
export type G1 = TL.Has<'a' | 'b', 'a' | 'b' | 'c'>

// $ExpectType "1"
export type G2 = TL.Has<'b', 'a' | 'b' | 'c'>

// $ExpectType "0"
export type G3 = TL.Has<'d' | 'f', 'a' | 'b' | 'c'>

// $ExpectType "1"
export type G4 = TL.Has<'c' | 'f', 'a' | 'b' | 'c'>
