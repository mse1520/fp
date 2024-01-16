/**
 * Converts value to Iterator.
 * @param iterable The value to convert.
 * @returns Returns the converted.
 */
const toIterator = (iterable: any): IterableIterator<any> =>
  iterable?.[Symbol.iterator]
    ? iterable[Symbol.iterator]()
    : (console.warn('is not IterableIterator!!'), (function* () { })());

export default toIterator;