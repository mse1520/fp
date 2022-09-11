import releasePromise from '@internal/releasePromise';
import take from './take';

/**
 * Gets the first element of iterable.
 * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
 * @param iterable conforms to the iterable protocol.
 * @returns Returns the first element of iterable.
 */
function head<T>(iterable: Iterable<T | Promise<T>>) {
  return releasePromise(take(iterable, 1), value => {
    const length = value.length - 1;
    if (length < 0) throw new Error('There is no data in the iterator!!');

    return value[0];
  });
}

export default head;