import _curryRight from '../basic/_curryRight.js';
import _take from '../basic/_take.js';

function _takeC(iterator, predicate) {
  return _take([...iterator], predicate);
}

export default _curryRight(_takeC);