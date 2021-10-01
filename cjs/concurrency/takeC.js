const curryRight = require('../basic/curryRight.js');

const take = require('../basic/take.js');

function takeC(iterator, predicate) {
  return take([...iterator], predicate);
}

module.exports = curryRight(takeC);