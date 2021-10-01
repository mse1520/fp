function* _keysL(object) {
  for (let key in object) yield key;
}

module.exports = _keysL;