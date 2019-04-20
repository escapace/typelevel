import { TL } from '@escapace/interface'

export type FA0 = () => null
export type FA1 = (a: number) => null
export type FA2 = (a: number, b: string) => null
export type FA3 = (a: number, b: string, c: boolean) => null

// $ExpectType []
export type A0 = TL.Arguments<FA0>
// $ExpectType [number]
export type A1 = TL.Arguments<FA1>
// $ExpectType [number, string]
export type A2 = TL.Arguments<FA2>
// $ExpectType [number, string, boolean]
export type A3 = TL.Arguments<FA3>

// $ExpectType never
export type B0 = TL.Argument<FA0, 0>
// $ExpectType number
export type B1 = TL.Argument<FA1, 1>
// $ExpectType string
export type B2 = TL.Argument<FA2, 2>
// $ExpectType boolean
export type B3 = TL.Argument<FA3, 3>
