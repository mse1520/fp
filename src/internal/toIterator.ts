const toIterator = (iterable: any): IterableIterator<any> =>
  iterable && iterable[Symbol.iterator]
    ? iterable[Symbol.iterator]()
    : (console.warn('is not IterableIterator!!'), (function* () { })());

export default toIterator;