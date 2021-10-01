function* _valuesL(object) {
  for (let key in object) yield object[key];
}

module.exports = _valuesL;