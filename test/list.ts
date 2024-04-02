import TL from '@escapace/typelevel'
import { expectType } from 'tsd'

// $ExpectType "1"
expectType<TL.Equal<TL.Head<[1]>, 1>>('1')
// $ExpectType "1"
expectType<TL.Equal<TL.Head<[1, 2, 3]>, 1>>('1')
// $ExpectType "1"
expectType<TL.Equal<TL.Head<[1, 2, 3], null>, 1>>('1')
// $ExpectType "1"
expectType<TL.Equal<TL.Head<[]>, never>>('1')
// $ExpectType "1"
expectType<TL.Equal<TL.Head<[], null>, null>>('1')

// $ExpectType "1"
expectType<TL.Equal<TL.Tail<[]>, []>>('1')
// $ExpectType "1"
expectType<TL.Equal<TL.Tail<[1]>, []>>('1')
// $ExpectType "1"
expectType<TL.Equal<TL.Tail<[1, 2, 3]>, [2, 3]>>('1')

// $ExpectType "1"
expectType<TL.Equal<TL.Last<[1]>, 1>>('1')
// $ExpectType "1"
expectType<TL.Equal<TL.Last<[1, 2, 3]>, 3>>('1')
// $ExpectType "1"
expectType<TL.Equal<TL.Last<[1, 2, 3]>, 3>>('1')
// $ExpectType "1"
expectType<TL.Equal<TL.Last<[]>, never>>('1')
// $ExpectType "1"
expectType<TL.Equal<TL.Last<[undefined]>, undefined>>('1')
// // $ExpectType "1"
expectType<TL.Equal<TL.Last<Array<number>>, number | undefined>>('1')
// $ExpectType "1"
expectType<TL.Equal<TL.First<[]>, never>>('1')

// $ExpectType "1"
expectType<TL.Equal<TL.Append<1, [4]>, [4, 1]>>('1')
// $ExpectType "1"
expectType<TL.Equal<TL.Append<1, [2, 3]>, [2, 3, 1]>>('1')

// $ExpectType "1"
expectType<TL.Equal<TL.Prepend<1, []>, [1]>>('1')
// $ExpectType "1"
expectType<TL.Equal<TL.Prepend<1, [2, 3]>, [1, 2, 3]>>('1')

// $ExpectType "1"
expectType<TL.Equal<TL.Reverse<[]>, []>>('1')
// $ExpectType "1"
expectType<TL.Equal<TL.Reverse<[1]>, [1]>>('1')
// $ExpectType "1"
expectType<TL.Equal<TL.Reverse<[1, 2, 3]>, [3, 2, 1]>>('1')

// $ExpectType "1"
expectType<TL.Equal<TL.Concat<[], []>, []>>('1')
// $ExpectType "1"
expectType<TL.Equal<TL.Concat<[], [1]>, [1]>>('1')
// $ExpectType "1"
expectType<TL.Equal<TL.Concat<[1], []>, [1]>>('1')
// $ExpectType "1"
expectType<TL.Equal<TL.Concat<[1, 2, 3], [4, 5]>, [1, 2, 3, 4, 5]>>('1')

// $ExpectType "1"
expectType<TL.Equal<TL.Zip<[], []>, []>>('1')
// $ExpectType "1"
expectType<TL.Equal<TL.Zip<[], [1]>, []>>('1')
// $ExpectType "1"
expectType<TL.Equal<TL.Zip<[1], []>, []>>('1')
// $ExpectType "1"
expectType<TL.Equal<TL.Zip<[1, 2], [4, 5]>, [[1, 4], [2, 5]]>>('1')
// $ExpectType "1"
expectType<TL.Equal<TL.Zip<[1, 2, 3], [4, 5]>, [[1, 4], [2, 5]]>>('1')

// $ExpectType "1"
expectType<TL.Equal<TL.Take<0, []>, []>>('1')
// $ExpectType "1"
expectType<TL.Equal<TL.Take<0, [1]>, []>>('1')
// $ExpectType "1"
expectType<TL.Equal<TL.Take<2, []>, []>>('1')
// $ExpectType "1"
expectType<TL.Equal<TL.Take<2, [1, 2, 3]>, [1, 2]>>('1')
// $ExpectType "1"
expectType<TL.Equal<TL.Take<3, [1, 2, 3]>, [1, 2, 3]>>('1')
// $ExpectType "1"
expectType<TL.Equal<TL.Take<5, [1, 2, 3]>, [1, 2, 3]>>('1')

// expectType<T.Equal<Tuple.Group<2, []>, []>
// expectType<T.Equal<Tuple.Group<2, [1]>, [[1]]>
// expectType<T.Equal<Tuple.Group<2, [1, 2, 3, 4]>, [[1, 2], [3, 4]]>
// expectType<T.Equal<Tuple.Group<3, [1, 2, 3, 4]>, [[1, 2, 3], [4]]>

// $ExpectType "1"
expectType<TL.Equal<TL.Drop<0, []>, []>>('1')
// $ExpectType "1"
expectType<TL.Equal<TL.Drop<0, [1]>, [1]>>('1')
// $ExpectType "1"
expectType<TL.Equal<TL.Drop<2, []>, []>>('1')
// $ExpectType "1"
expectType<TL.Equal<TL.Drop<2, [1, 2, 3]>, [3]>>('1')
// $ExpectType "1"
expectType<TL.Equal<TL.Drop<3, [1, 2, 3]>, []>>('1')
// $ExpectType "1"
expectType<TL.Equal<TL.Drop<5, [1, 2, 3]>, []>>('1')

// $ExpectType "1"
expectType<TL.Equal<TL.Flatten<[]>, []>>('1')
// $ExpectType "1"
expectType<TL.Equal<TL.Flatten<[[]]>, []>>('1')
// $ExpectType "1"
expectType<TL.Equal<TL.Flatten<[[], [1]]>, [1]>>('1')
// $ExpectType "1"
expectType<TL.Equal<TL.Flatten<[[1], []]>, [1]>>('1')
// $ExpectType "1"
expectType<TL.Equal<TL.Flatten<[[1, 2, 3], [4, 5]]>, [1, 2, 3, 4, 5]>>('1')
// $ExpectType "1"
expectType<TL.Equal<TL.Flatten<[[1, 2], [3, 4]]>, [1, 2, 3, 4]>>('1')
// $ExpectType "1"
expectType<TL.Equal<TL.Flatten<[[1, 2], [], [3, 4]]>, [1, 2, 3, 4]>>('1')
// $ExpectType "1"
expectType<TL.Equal<TL.Flatten<[[1, 2], [], [3, 4]]>, [1, 2, 3, 4]>>('1')

// // $ExpectType "1"
// expectType<TL.Equal<TL.Flatten<string[][][]>, string[]>

// $ExpectType "1"
expectType<TL.Equal<TL.Repeat<1, 0>, []>>('1')
// $ExpectType "1"
expectType<TL.Equal<TL.Repeat<1, 1>, [1]>>('1')
// $ExpectType "1"
expectType<TL.Equal<TL.Repeat<1, 5>, [1, 1, 1, 1, 1]>>('1')

// expectType<T.Equal<Tuple.Range<0, 0>, [0]>
// expectType<T.Equal<Tuple.Range<2, 5>, [2, 3, 4, 5]>
