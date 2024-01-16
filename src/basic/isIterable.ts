/**
 * Checks if value is Iterable.
 * @param target The value to check.
 * @returns Returns true if value is Iterable, else false.
 */
const isIterable = (target: any): target is Iterable<any> => !!target?.[Symbol.iterator];

export default isIterable;