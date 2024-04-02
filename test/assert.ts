import TL from '@escapace/typelevel'
import { expectType } from 'tsd'

expectType<TL.Assert.False<TL.False>>(1)
expectType<TL.Assert.True<TL.True>>(1)
