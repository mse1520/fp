import _curryRight from './_curryRight.js';
import _reduce from './_reduce.js';

function _indexBy(iterator, predicate) {
  return _reduce(iterator, (object, value, index) => (object[predicate(value, index)] = value, object), {});
}

export default _curryRight(_indexBy);