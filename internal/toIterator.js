function toIterator(iterable) {
  return iterable && iterable[Symbol.iterator]
    ? iterable[Symbol.iterator]()
    : (function* () { })();
}

export default toIterator;