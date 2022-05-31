function isIterable<T>(target: Iterator<T>): target is IterableIterator<T> {
  return Symbol.iterator in target;
}

function toIterator<T>(iterable: Iterable<T>) {
  const iterator = iterable[Symbol.iterator]();
  return isIterable(iterator) ? iterator : (console.warn('is not IterableIterator!!'), (function* () { })());
}

export default toIterator;