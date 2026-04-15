export type Properties<T, K = keyof T, F = never> = K extends keyof T ? T[K] : F
