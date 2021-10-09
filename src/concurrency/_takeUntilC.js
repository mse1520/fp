import _curryRight from '../basic/_curryRight.js';
import _takeUntilL from '../lazy/_takeUntilL.js';
import _takeAllC from './_takeAllC.js';

function _takeUntilC(iterator, predicate) {
  return _takeAllC(_takeUntilL(iterator, predicate));
}

export default _curryRight(_takeUntilC);