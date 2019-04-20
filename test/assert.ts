import { TL } from '@escapace/interface'

// $ExpectType "1"
export type F1 = TL.Assert.False<TL.False>
// $ExpectType "1"
export type F2 = TL.Assert.True<TL.True>
