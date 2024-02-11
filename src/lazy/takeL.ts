import curryRight from '@basic/curryRight';
import toIterator from '@basic/toIterator';

interface TakeL {
  (length: number): <T>(iterable: Iterable<T>) => Generator<T, void>;
  <T>(iterable: Iterable<T>, length: number): Generator<T, void>;
}

/**
 * Creates a Generator with n elements taken from the beginning.
 * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
 * @param iterable conforms to the iterable protocol.
 * @param length The number of elements to take.
 * @returns Generator
 */
const takeL: TakeL = curryRight(function* (iterable: Iterable<any>, length: number) {
  if (length < 1) return console.warn('In takeL function, length parameter is not allowed to be less than 1!!');

  const iter = toIterator(iterable);
  let next;

  while (!(next = iter.next()).done) {
    yield next.value;
    if (!--length) return;
  }
});

export default takeL;