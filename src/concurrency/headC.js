import releasePromise from '../internal/releasePromise.js';
import takeC from './takeC.js';

function headC(iterator) {
  return releasePromise(takeC(iterator, 1), ([value]) => value);
}

export default headC;