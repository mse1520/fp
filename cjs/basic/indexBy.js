const curryRight = require('./curryRight.js');

const reduce = require('./reduce.js');

function indexBy(iterator, predicate) {
  return reduce(iterator, (object, value, index) => (object[predicate(value, index)] = value, object), {});
}

module.exports = curryRight(indexBy);