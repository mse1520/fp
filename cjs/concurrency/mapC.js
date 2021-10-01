const curryRight = require('../basic/curryRight.js');

const mapL = require('../lazy/mapL.js');

const takeAllC = require('./takeAllC.js');

function mapC(iterator, predicate) {
  return takeAllC(mapL(iterator, predicate));
}

;
module.exports = curryRight(mapC);