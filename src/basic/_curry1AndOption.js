function _curry1AndOption(func) {
  return (first, option) => first[Symbol.iterator]
    ? func(first, option)
    : iterator => func(iterator, first);
}

export default _curry1AndOption;