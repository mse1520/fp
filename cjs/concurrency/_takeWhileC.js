const _curryRight = require('../basic/_curryRight.js');

const _takeWhileL = require('../lazy/_takeWhileL.js');

const _takeAllC = require('./_takeAllC.js');

function _takeWhileC(iterator, predicate) {
  return _takeAllC(_takeWhileL(iterator, predicate));
}

module.exports = _curryRight(_takeWhileC);