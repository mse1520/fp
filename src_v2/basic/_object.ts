import _reduce from './_reduce';

function _object<T>(entries: Iterable<[string, T] | Promise<[string, T]>>) {
  return _reduce<[string, T], { [key: string]: T; }>(entries, (acc, [key, value]) => (acc[key] = value, acc), {});
}

export default _object;