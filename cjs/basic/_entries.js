const _takeAll = require('./_takeAll.js');

const _entriesL = require('../lazy/_entriesL.js');

function _entries(object) {
  return _takeAll(_entriesL(object));
}

module.exports = _entries;