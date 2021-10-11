const _curryRight = require('../basic/_curryRight.js');

const _takeUntilL = require('../lazy/_takeUntilL.js');

const _takeAllC = require('./_takeAllC.js');

function _takeUntilC(iterator, predicate) {
  return _takeAllC(_takeUntilL(iterator, predicate));
}

module.exports = _curryRight(_takeUntilC);