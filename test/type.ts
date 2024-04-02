import TL from '@escapace/typelevel'
import { expectType } from 'tsd'

expectType<TL.Equal<unknown, unknown>>('1')
expectType<TL.Equal<unknown, any>>('0')
expectType<TL.Equal<unknown, never>>('0')
expectType<TL.Equal<unknown, 'abcd'>>('0')

expectType<TL.Equal<any, unknown>>('0')
expectType<TL.Equal<any, any>>('1')
expectType<TL.Equal<any, never>>('0')
expectType<TL.Equal<any, 'abcd'>>('0')

expectType<TL.Equal<never, unknown>>('0')
expectType<TL.Equal<never, any>>('0')
expectType<TL.Equal<never, never>>('1')
expectType<TL.Equal<never, 'abcd'>>('0')

expectType<TL.Equal<'abcd', unknown>>('0')
expectType<TL.Equal<'abcd', any>>('0')
expectType<TL.Equal<'abcd', never>>('0')
expectType<TL.Equal<'abcd', 'abcd'>>('1')

expectType<TL.Equal<string, number | string>>('0')

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

expectType<TL.Equal<TL.Type<example, 1>, [1]>>('1')
expectType<TL.Equal<TL.Type2<example, 1, 2>, [1, 2]>>('1')
expectType<TL.Equal<TL.Type3<example, 1, 2, 3>, [1, 2, 3]>>('1')
expectType<TL.Equal<TL.Type4<example, 1, 2, 3, 4>, [1, 2, 3, 4]>>('1')
