function toIterator(iterable) {
  return iterable && iterable[Symbol.iterator] ? iterable[Symbol.iterator]() : function* () {}();
}

module.exports = toIterator;