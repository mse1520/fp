const _curryRight = require('../basic/_curryRight.js');

const _take = require('../basic/_take.js');

function _takeC(iterator, predicate) {
  return _take([...iterator], predicate);
}

module.exports = _curryRight(_takeC);