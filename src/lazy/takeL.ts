import curryRight from '@basic/curryRight';

interface TakeL {
  /**
   * Creates a Generator with n elements taken from the beginning.
   * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
   * @param iterable conforms to the iterable protocol.
   * @param length The number of elements to take.
   * @returns Generator
   */
  (length: number): <T>(iterable: Iterable<T>) => Generator<T, void>;
  <T>(iterable: Iterable<T>, length: number): Generator<T, void>;
}

function* _takeL<T>(iterable: Iterable<T>, length: number) {
  if (length < 1) return console.warn('In takeL function, length parameter is not allowed to be less than 1!!');

  for (const value of iterable) {
    yield value;
    if (!--length) return;
  }
}

const takeL: TakeL = curryRight(_takeL);

export default takeL;