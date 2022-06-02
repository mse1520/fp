function isIterable<T>(target: Iterator<T>): target is IterableIterator<T> {
  return Symbol.iterator in target;
}

function toIterator<T>(iterable: Iterable<T>) {
  const iter = iterable[Symbol.iterator]();
  return isIterable(iter) ? iter : (console.warn('is not IterableIterator!!'), (function* () { })());
}

export default toIterator;