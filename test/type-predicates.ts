/* eslint-disable typescript/no-invalid-void-type */
import type TL from '@escapace/typelevel'
import { expectType } from 'tsd'

expectType<TL.Is.Never<never>>(1)
expectType<TL.Is.Never<any>>(0)
expectType<TL.Is.Never<unknown>>(0)
expectType<TL.Is.Never<'abcd'>>(0)

expectType<TL.Is.Any<never>>(0)
expectType<TL.Is.Any<any>>(1)
expectType<TL.Is.Any<unknown>>(0)
expectType<TL.Is.Any<'abcd'>>(0)

expectType<TL.Is.Unknown<never>>(0)
expectType<TL.Is.Unknown<any>>(0)
expectType<TL.Is.Unknown<unknown>>(1)
expectType<TL.Is.Unknown<'abcd'>>(0)

expectType<TL.Is.Never<TL.Is.Falsy<never>>>(1)
expectType<TL.Is.Falsy<'' | 0 | false | null | undefined | void>>(1)
expectType<TL.Is.Falsy<0>>(1)
expectType<TL.Equal<TL.Is.Falsy<number>, 0 | 1>>(1)
expectType<TL.Is.Falsy<''>>(1)
expectType<TL.Equal<TL.Is.Falsy<string>, 0 | 1>>(1)
expectType<TL.Is.Falsy<false>>(1)
expectType<TL.Equal<TL.Is.Falsy<boolean>, 0 | 1>>(1)
expectType<TL.Equal<TL.Is.Falsy<boolean | number | string>, 0 | 1>>(1)
expectType<TL.Is.Falsy<null | undefined | void>>(1)

expectType<TL.Is.Never<TL.Is.Truthy<never>>>(1)
expectType<TL.Is.Truthy<'' | 0 | false | null | undefined | void>>(0)
expectType<TL.Is.Truthy<0>>(0)
expectType<TL.Equal<TL.Is.Truthy<number>, 0 | 1>>(1)
expectType<TL.Is.Truthy<''>>(0)
expectType<TL.Equal<TL.Is.Truthy<string>, 0 | 1>>(1)
expectType<TL.Is.Truthy<false>>(0)
expectType<TL.Equal<TL.Is.Truthy<boolean>, 0 | 1>>(1)
expectType<TL.Equal<TL.Is.Truthy<boolean | number | string>, 0 | 1>>(1)
expectType<TL.Is.Truthy<null | undefined | void>>(0)

expectType<TL.Is.Primitive<'abcd'>>(1)
expectType<TL.Is.Primitive<2>>(1)
expectType<TL.Is.Primitive<false>>(1)
expectType<TL.Is.Primitive<symbol>>(1)
expectType<TL.Is.Primitive<{}>>(0)

expectType<TL.Is.String<'abcd'>>(1)
expectType<TL.Is.String<{}>>(0)

expectType<TL.Is.Number<1>>(1)
expectType<TL.Is.Number<{}>>(0)

expectType<TL.Is.Boolean<true>>(1)
expectType<TL.Is.Boolean<{}>>(0)

expectType<TL.Is.Symbol<symbol>>(1)
expectType<TL.Is.Symbol<{}>>(0)

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
