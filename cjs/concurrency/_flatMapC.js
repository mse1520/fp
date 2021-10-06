const _curryRight = require('../basic/_curryRight.js');

const _takeAll = require('../basic/_takeAll.js');

const _mapL = require('../lazy/_mapL.js');

const _flatL = require('../lazy/_flatL.js');

function _flatMapC(iterator, predicate) {
  return _takeAll(_flatL([..._mapL(iterator, predicate)]));
}

module.exports = _curryRight(_flatMapC);