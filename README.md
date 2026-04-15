# @escapace/typelevel

Collection of small TypeScript type utilities for boolean logic, set operations, tuples, objects, and higher-kinded type plumbing.

The list below assumes `import type $ from '@escapace/typelevel'` and names each utility by its full path from that import.

## Assert

- `$.Assert.False<T>` asserts that `T` is exactly `$.False`.
- `$.Assert.True<T>` asserts that `T` is exactly `$.True`.

## Is

- `$.Is.Any<T>` returns `$.True` when `T` is `any`.
- `$.Is.Boolean<T>` returns `$.True` when `T` extends `boolean`.
- `$.Is.Falsy<T>` returns `$.True` for JavaScript falsy types such as `''`, `0`, `false`, `null`, `undefined`, and `void`, and may return `$.False | $.True` for wider scalar types.
- `$.Is.Never<T>` returns `$.True` when `T` is `never`.
- `$.Is.Number<T>` returns `$.True` when `T` extends `number`.
- `$.Is.Primitive<T>` returns `$.True` when `T` is a `number`, `boolean`, `string`, or `symbol`.
- `$.Is.String<T>` returns `$.True` when `T` extends `string`.
- `$.Is.Symbol<T>` returns `$.True` when `T` extends `symbol`.
- `$.Is.Truthy<T>` returns the inverse of `$.Is.Falsy<T>`.
- `$.Is.Unknown<T>` returns `$.True` when `T` is `unknown`.

## To

- `$.To.Boolean<T>` converts `$.False` or `$.True` to `false` or `true`.
- `$.To.Intersection<U>` converts a union `U` into an intersection.

## Boolean algebra

- `$.And<A, B>` returns `$.True` when both operands are `$.True`.
- `$.Equivalence<A, B>` returns `$.True` when both operands are equal.
- `$.False` is the type-level false value `0`.
- `$.Implication<A, B>` models logical implication and returns `$.False` only when `A` is `$.True` and `B` is `$.False`.
- `$.Not<T>` flips `$.False` to `$.True` and `$.True` to `$.False`.
- `$.Or<A, B>` returns `$.True` when either operand is `$.True`.
- `$.True` is the type-level true value `1`.
- `$.Xor<A, B>` returns `$.True` when exactly one operand is `$.True`.

## Set algebra

- `$.Complement<A, B>` returns the part of the universal set `A` that is not in subset `B`.
- `$.Contains<A, B>` returns `$.True` when `B` is a subset of `A`.
- `$.Difference<A, B>` returns the members of `A` that are not in `B`.
- `$.Has<A, B>` returns `$.True` when `A` and `B` share at least one member.
- `$.Intersection<A, B>` returns the members shared by `A` and `B`.
- `$.SymmetricDifference<A, B>` returns the members that appear in exactly one of `A` or `B`.
- `$.Union<A, B>` returns the union of `A` and `B`.

## Function

- `$.Argument<T, N>` returns the `N`th argument type of function `T` using the library's one-based indexing scheme, where `0` resolves to `never`.
- `$.Arguments<T>` returns the parameter tuple of function `T`.

## List

- `$.Append<A, B>` adds `A` to the end of tuple `B`.
- `$.Concat<A, B>` concatenates tuples `A` and `B`.
- `$.Cons<A, B>` is an alias of `$.Prepend<A, B>`.
- `$.Drop<N, T>` removes the first `N` elements from tuple `T`.
- `$.First<T, D>` is an alias of `$.Head<T, D>`.
- `$.Flatten<T>` flattens a tuple of tuples by one level.
- `$.Head<T, D>` returns the first element of tuple `T`, or `D` when `T` is empty.
- `$.Last<T>` returns the last element of tuple `T`.
- `$.List<A>` is the base readonly list type `readonly A[]`.
- `$.Prepend<A, B>` adds `A` to the front of tuple `B`.
- `$.Repeat<T, N>` builds a tuple with `T` repeated `N` times.
- `$.Reverse<L>` reverses tuple `L`.
- `$.Tail<L>` returns every element of tuple `L` except the first.
- `$.Take<N, T>` returns the first `N` elements of tuple `T`.
- `$.Values<T>` returns the union of the element types in an array-like type `T`.
- `$.Zip<A, B>` pairs tuples `A` and `B` element by element until either tuple runs out.

## Object

- `$.Assign<T, U>` merges object types and lets keys from `U` overwrite keys from `T`.
- `$.Omit<T, K>` removes keys `K` from `T`, distributing across unions.
- `$.Prettify<T>` remaps `T` to a plain object shape that is easier to inspect in editor tooltips.
- `$.Properties<T, K, F>` returns the value type for key `K` in `T`, or `F` for missing keys.

## Type and higher-kinded type helpers

- `$.Cast<T, P>` keeps `T` when it already extends `P`; otherwise it falls back to `P`.
- `$.Constructable<T>` describes a constructor that produces `T`.
- `$.Equal<A, B>` returns `$.True` when `A` and `B` are strictly equal types.
- `$.Extends<V, T>` returns `$.True` when `V` extends `T`.
- `$.HKT<URI, A>` is the base interface for unary higher-kinded types.
- `$.HKT2<URI, L, A>` is the base interface for binary higher-kinded types.
- `$.HKT3<URI, U, L, A>` is the base interface for ternary higher-kinded types.
- `$.HKT4<URI, X, U, L, A>` is the base interface for quaternary higher-kinded types.
- `$.If<T, Then, Else>` selects `Then` for `$.True` and `Else` for `$.False`.
- `$.NoInfer<T>` preserves `T` while reducing inference from that position.
- `$.Phantom` is the unique symbol used as the placeholder key in the higher-kinded type registries.
- `$.Type<URI, A>` applies a registered unary higher-kinded type to `A`.
- `$.Type2<URI, L, A>` applies a registered binary higher-kinded type to `L` and `A`.
- `$.Type3<URI, U, L, A>` applies a registered ternary higher-kinded type to `U`, `L`, and `A`.
- `$.Type4<URI, X, U, L, A>` applies a registered quaternary higher-kinded type to `X`, `U`, `L`, and `A`.
- `$.URI2HKT<A>` is the augmentation point for unary higher-kinded type mappings.
- `$.URI2HKT2<A, B>` is the augmentation point for binary higher-kinded type mappings.
- `$.URI2HKT3<A, B, C>` is the augmentation point for ternary higher-kinded type mappings.
- `$.URI2HKT4<A, B, C, D>` is the augmentation point for quaternary higher-kinded type mappings.
- `$.URIS` is the union of registered unary higher-kinded type identifiers.
- `$.URIS2` is the union of registered binary higher-kinded type identifiers.
- `$.URIS3` is the union of registered ternary higher-kinded type identifiers.
- `$.URIS4` is the union of registered quaternary higher-kinded type identifiers.
- `$.Widen<T>` widens boolean, number, and string literals to their scalar parent types.
