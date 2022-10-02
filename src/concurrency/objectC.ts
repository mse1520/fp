import reduceC from './reduceC';

/**
 * Converts arrays into objects. Pass either a single list of [key, value] pairs.
 * Importantly, this is concurrency function.
 * @param entries a single list of [key, value] pairs.
 * @returns key value object.
 */
function objectC<T>(entries: Iterable<[string, T] | Promise<[string, T]>>) {
  return reduceC<[string, T], { [key: string]: T; }>(entries, (acc, [key, value]) => (acc[key] = value, acc), {});
}

export default objectC;