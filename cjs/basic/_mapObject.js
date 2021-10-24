const _curryRight = require('./_curryRight.js');

const _object = require('./_object.js');

const _mapL = require('../lazy/_mapL.js');

const _entriesL = require('../lazy/_entriesL.js');

function _mapObject(object, predicate) {
  return _object(_mapL(_entriesL(object), ([key, value], index) => [key, predicate(value, key, index)]));
}

module.exports = _curryRight(_mapObject);