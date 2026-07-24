/**
 * Joins class names together, filtering out falsy values.
 * A lightweight stand-in for `clsx` since we don't have it as a dependency.
 */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
