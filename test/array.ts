import { TL } from '@escapace/interface'

// $ExpectType "1"
export type A1 = TL.Equal<TL.Head<[1]>, 1>
// $ExpectType "1"
export type A2 = TL.Equal<TL.Head<[1, 2, 3]>, 1>
// $ExpectType "1"
export type A3 = TL.Equal<TL.Head<[1, 2, 3], null>, 1>
// $ExpectType "1"
export type A4 = TL.Equal<TL.Head<[]>, never>
// $ExpectType "1"
export type A5 = TL.Equal<TL.Head<[], null>, null>

// $ExpectType "1"
export type B1 = TL.Equal<TL.Tail<[]>, []>
// $ExpectType "1"
export type B2 = TL.Equal<TL.Tail<[1]>, []>
// $ExpectType "1"
export type B3 = TL.Equal<TL.Tail<[1, 2, 3]>, [2, 3]>

// $ExpectType "1"
export type C1 = TL.Equal<TL.Last<[1]>, 1>
// $ExpectType "1"
export type C2 = TL.Equal<TL.Last<[1, 2, 3]>, 3>
// $ExpectType "1"
export type C3 = TL.Equal<TL.Last<[1, 2, 3], null>, 3>
// $ExpectType "1"
export type C4 = TL.Equal<TL.Last<[]>, never>
// $ExpectType "1"
export type C5 = TL.Equal<TL.Last<[], null>, null>

// $ExpectType "1"
export type D1 = TL.Equal<TL.Cons<1, []>, [1]>
// $ExpectType "1"
export type D2 = TL.Equal<TL.Cons<1, [2, 3]>, [1, 2, 3]>

// $ExpectType "1"
export type E1 = TL.Equal<TL.Reverse<[]>, []>
// $ExpectType "1"
export type E2 = TL.Equal<TL.Reverse<[1]>, [1]>
// $ExpectType "1"
export type E3 = TL.Equal<TL.Reverse<[1, 2, 3]>, [3, 2, 1]>

// $ExpectType "1"
export type F1 = TL.Equal<TL.Concat<[], []>, []>
// $ExpectType "1"
export type F2 = TL.Equal<TL.Concat<[], [1]>, [1]>
// $ExpectType "1"
export type F3 = TL.Equal<TL.Concat<[1], []>, [1]>
// $ExpectType "1"
export type F4 = TL.Equal<TL.Concat<[1, 2, 3], [4, 5]>, [1, 2, 3, 4, 5]>

// $ExpectType "1"
export type G1 = TL.Equal<TL.Zip<[], []>, []>
// $ExpectType "1"
export type G2 = TL.Equal<TL.Zip<[], [1]>, []>
// $ExpectType "1"
export type G3 = TL.Equal<TL.Zip<[1], []>, []>
// $ExpectType "1"
export type G4 = TL.Equal<TL.Zip<[1, 2], [4, 5]>, [[1, 4], [2, 5]]>
// $ExpectType "1"
export type G5 = TL.Equal<TL.Zip<[1, 2, 3], [4, 5]>, [[1, 4], [2, 5]]>

// $ExpectType "1"
export type H1 = TL.Equal<TL.Take<0, []>, []>
// $ExpectType "1"
export type H2 = TL.Equal<TL.Take<0, [1]>, []>
// $ExpectType "1"
export type H3 = TL.Equal<TL.Take<2, []>, []>
// $ExpectType "1"
export type H4 = TL.Equal<TL.Take<2, [1, 2, 3]>, [1, 2]>
// $ExpectType "1"
export type H5 = TL.Equal<TL.Take<3, [1, 2, 3]>, [1, 2, 3]>
// $ExpectType "1"
export type H6 = TL.Equal<TL.Take<5, [1, 2, 3]>, [1, 2, 3]>

// export type I1 = T.Equal<Tuple.Group<2, []>, []>
// export type I1 = T.Equal<Tuple.Group<2, [1]>, [[1]]>
// export type I1 = T.Equal<Tuple.Group<2, [1, 2, 3, 4]>, [[1, 2], [3, 4]]>
// export type I1 = T.Equal<Tuple.Group<3, [1, 2, 3, 4]>, [[1, 2, 3], [4]]>

// $ExpectType "1"
export type J1 = TL.Equal<TL.Drop<0, []>, []>
// $ExpectType "1"
export type J2 = TL.Equal<TL.Drop<0, [1]>, [1]>
// $ExpectType "1"
export type J3 = TL.Equal<TL.Drop<2, []>, []>
// $ExpectType "1"
export type J4 = TL.Equal<TL.Drop<2, [1, 2, 3]>, [3]>
// $ExpectType "1"
export type J5 = TL.Equal<TL.Drop<3, [1, 2, 3]>, []>
// $ExpectType "1"
export type J6 = TL.Equal<TL.Drop<5, [1, 2, 3]>, []>

// $ExpectType "1"
export type K1 = TL.Equal<TL.Flatten<[]>, []>
// $ExpectType "1"
export type K2 = TL.Equal<TL.Flatten<[[]]>, []>
// $ExpectType "1"
export type K3 = TL.Equal<TL.Flatten<[[], [1]]>, [1]>
// $ExpectType "1"
export type K4 = TL.Equal<TL.Flatten<[[1], []]>, [1]>
// $ExpectType "1"
export type K5 = TL.Equal<TL.Flatten<[[1, 2, 3], [4, 5]]>, [1, 2, 3, 4, 5]>
// $ExpectType "1"
export type K6 = TL.Equal<TL.Flatten<[[1, 2], [3, 4]]>, [1, 2, 3, 4]>
// $ExpectType "1"
export type K7 = TL.Equal<TL.Flatten<[[1, 2], [], [3, 4]]>, [1, 2, 3, 4]>
// $ExpectType "1"
export type K8 = TL.Equal<TL.Flatten<[[1, 2], [], [3, 4]]>, [1, 2, 3, 4]>

// $ExpectType "1"
export type L1 = TL.Equal<TL.Repeat<1, 0>, []>
// $ExpectType "1"
export type L2 = TL.Equal<TL.Repeat<1, 1>, [1]>
// $ExpectType "1"
export type L3 = TL.Equal<TL.Repeat<1, 5>, [1, 1, 1, 1, 1]>

// export type A1 = T.Equal<Tuple.Range<0, 0>, [0]>
// export type A1 = T.Equal<Tuple.Range<2, 5>, [2, 3, 4, 5]>
