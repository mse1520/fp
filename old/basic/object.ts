import reduce from './reduce';

/**
 * Converts arrays into objects. Pass either a single list of [key, value] pairs.
 * @param entries a single list of [key, value] pairs.
 * @returns key value object.
 */
function object<T>(entries: Iterable<[string, T] | Promise<[string, T]>>) {
  return reduce<[string, T], { [key: string]: T; }>(entries, (acc, [key, value]) => (acc[key] = value, acc), {});
}

export default object;