function _last(iterator) {
  return iterator.length > 0 ? iterator[iterator.length - 1] : undefined;
}

module.exports = _last;