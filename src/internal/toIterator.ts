const isIterable = <T>(target: Iterator<T>): target is IterableIterator<T> => Symbol.iterator in target;

const toIterator = <T>(iterable: Iterable<T>) => {
  const iter = iterable[Symbol.iterator]();
  return isIterable(iter) ? iter : (console.warn('is not IterableIterator!!'), (function* () { })());
};

export default toIterator;