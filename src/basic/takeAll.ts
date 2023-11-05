import take from './take';

/**
 * Creates a new array with all elements taken from the beginning.
 * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
 * @param iterable conforms to the iterable protocol.
 * @returns new array
 */
const takeAll = <T>(iterable: Iterable<T>) => take(iterable, Infinity);

export default takeAll;