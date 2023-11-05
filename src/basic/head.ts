import take from './take';

/**
 * Gets the first element of iterable.
 * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
 * @param iterable conforms to the iterable protocol.
 * @returns Returns the first element of iterable.
 */
const head = <T>(iterable: Iterable<T>) => take(iterable, 1)[0];

export default head;