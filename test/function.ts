import TL from '@escapace/typelevel'
import { expectType } from 'tsd'

export type FA0 = () => null
export type FA1 = (a: number) => null
export type FA2 = (a: number, b: string) => null
export type FA3 = (a: number, b: string, c: boolean) => null

expectType<TL.Arguments<FA0>>([])
expectType<TL.Arguments<FA1>>([1])
expectType<TL.Arguments<FA2>>([1, 'qwe'])
expectType<TL.Arguments<FA3>>([1, 'qwe', false])

expectType<TL.Is.Never<TL.Argument<FA0, 0>>>(1)
expectType<TL.Argument<FA1, 1>>(1)
expectType<TL.Argument<FA2, 2>>('sfqwe')
expectType<TL.Argument<FA3, 3>>(true)
expectType<TL.Argument<FA3, 4>>(undefined)
