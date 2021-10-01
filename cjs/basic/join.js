const curryRight = require('./curryRight.js');

const reduce = require('./reduce.js');

function join(iterator, separator) {
  return reduce(iterator, (accumulate, value) => `${accumulate}${separator}${value}`);
}

module.exports = curryRight(join);