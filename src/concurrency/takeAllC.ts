import take from '@basic/take';

/**
 * Creates a new array with all elements taken from the beginning.
 * Importantly, this is concurrency function.
 * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
 * @param iterable conforms to the iterable protocol.
 * @returns new array
 */
function takeAllC<T>(iterable: Iterable<T | Promise<T>>) {
  return take([...iterable], Infinity);
}

export default takeAllC;