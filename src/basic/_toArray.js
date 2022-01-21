import _map from './_map.js';
import _identity from './_identity.js';

function _toArray(iterator) {
  return _map(iterator, _identity);
}

export default _toArray;