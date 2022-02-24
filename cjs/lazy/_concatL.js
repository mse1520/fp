const _curryRight = require('../basic/_curryRight.js');

function* _concatL(iterator1, iterator2) {
  yield* iterator1;
  yield* iterator2;
}

module.exports = _curryRight(_concatL);