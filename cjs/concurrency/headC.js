const releasePromise = require('../internal/releasePromise.js');

const takeC = require('./takeC.js');

function headC(iterator) {
  return releasePromise(takeC(iterator, 1), ([value]) => value);
}

module.exports = headC;