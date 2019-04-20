/**
 * Get the parameter types of a function.
 */
export type Arguments<T extends (...args: any[]) => any> = T extends ((
  ...args: infer U
) => any)
  ? U
  : never
