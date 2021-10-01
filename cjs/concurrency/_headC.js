const releasePromise = require('../internal/releasePromise.js');

const _takeC = require('./_takeC.js');

function _headC(iterator) {
  return releasePromise(_takeC(iterator, 1), ([value]) => value);
}

module.exports = _headC;