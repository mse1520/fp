import _curryRight from '../basic/_curryRight.js';

function* _concatL(iterator1, iterator2) {
  yield* iterator1;
  yield* iterator2;
}

export default _curryRight(_concatL);