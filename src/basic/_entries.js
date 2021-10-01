import _takeAll from './_takeAll.js';
import _entriesL from '../lazy/_entriesL.js';

function _entries(object) {
  return _takeAll(_entriesL(object));
}

export default _entries;