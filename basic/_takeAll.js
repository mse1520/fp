import _take from './_take.js';

function _takeAll(iterator) {
  return _take(iterator, Infinity);
};

export default _takeAll;