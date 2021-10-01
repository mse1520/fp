const _takeAll = require('./_takeAll.js');

const _valuesL = require('../lazy/_valuesL.js');

function _values(object) {
  return _takeAll(_valuesL(object));
}

module.exports = _values;