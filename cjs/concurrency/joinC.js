const curryRight = require('../basic/curryRight.js');

const reduceC = require('./reduceC.js');

function joinC(iterator, separator) {
  return reduceC(iterator, (accumulate, value) => `${accumulate}${separator}${value}`);
}

module.exports = curryRight(joinC);