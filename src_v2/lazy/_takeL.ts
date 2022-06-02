import _curryRight from '@basic/_curryRight';

interface TakeL {
  (length: number): <T>(iterable: Iterable<T | Promise<T>>) => Generator<T | Promise<T>, void>;
  <T>(iterable: Iterable<T | Promise<T>>, length: number): Generator<T | Promise<T>, void>;
}

function* takeL<T>(iterable: Iterable<T | Promise<T>>, length: number) {
  if (length < 1) return console.warn('In _takeL function, length parameter is not allowed to be less than 1!!');

  for (const value of iterable) {
    yield value;
    if (!--length) return;
  }
}

const _takeL: TakeL = _curryRight(takeL);

export default _takeL;