import _take from '../basic/_take.js';

function _takeAllC(iterator) {
  return _take([...iterator], Infinity);
}

export default _takeAllC;