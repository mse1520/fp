const toIterator = require('../internal/toiterator.js');

const curryRight3To2 = require('../basic/curryRight3To2.js');

const head = require('../basic/head.js');

const reduce = require('../basic/reduce.js');

function reduceC(iterator, predicate, accumulate) {
  let _iterator = [...iterator];
  if (arguments.length < 3) _iterator = toIterator(_iterator), accumulate = head(_iterator);
  return reduce(_iterator, predicate, accumulate);
}

;
module.exports = curryRight3To2(reduceC);