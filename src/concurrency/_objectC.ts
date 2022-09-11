import reduceC from './reduceC';

function _objectC<T>(entries: Iterable<[string, T] | Promise<[string, T]>>) {
  return reduceC<[string, T], { [key: string]: T; }>(entries, (acc, [key, value]) => (acc[key] = value, acc), {});
}

export default _objectC;