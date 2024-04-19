/**
 * Get the parameter types of a function.
 */
export type Arguments<T extends (...arguments_: any[]) => any> = T extends (
  ...arguments_: infer U
) => any
  ? [...U]
  : never
