import releasePromise from '../internal/releasePromise.js';
import _takeC from './_takeC.js';

function _headC(iterator) {
  return releasePromise(_takeC(iterator, 1), ([value]) => value);
}

export default _headC;