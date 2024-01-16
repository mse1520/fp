import noopHandler from '@internal/noopHandler';
import toIterator from './toIterator';

/**
 * Creates a slice of array with n elements taken from the beginning.
 * This function has currying applied. For more information about currying, visit 'https://github.com/mse1520/underbarjs#readme'.
 * @param iterable conforms to the iterable protocol.
 */
const leave = (iterable: Iterable<any>) => {
  const iter = toIterator(iterable);
  let next: IteratorResult<any>;

  const recur = (): any => {
    while (!(next = iter.next()).done) {
      if (next.value instanceof Promise)
        return next.value
          .then(() => next.done ? undefined : recur())
          .catch(noopHandler(recur));
    }
  };

  return recur();
};

export default leave;