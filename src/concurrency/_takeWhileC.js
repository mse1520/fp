import _curryRight from '../basic/_curryRight.js';
import _takeWhileL from '../lazy/_takeWhileL.js';
import _takeAllC from './_takeAllC.js';

function _takeWhileC(iterator, predicate) {
  return _takeAllC(_takeWhileL(iterator, predicate));
}

export default _curryRight(_takeWhileC);