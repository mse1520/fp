const _head = require('./_head.js');

const _replace = require('./_replace.js');

const _toUpperCase = require('./_toUpperCase.js');

function _toUpperCaseFirst(str) {
  return _replace(str, /^./, _toUpperCase(_head(str)));
}

module.exports = _toUpperCaseFirst;