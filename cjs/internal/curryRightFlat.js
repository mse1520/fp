function curryRightFlat(func) {
  return (first, option) => first[Symbol.iterator] ? func(first, option) : iterator => func(iterator, first);
}

module.exports = curryRightFlat;