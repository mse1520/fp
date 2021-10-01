import _entriesL from '../lazy/_entriesL.js';
import _takeAllC from './_takeAllC.js';

function _entriesC(object) {
  return _takeAllC(_entriesL(object));
}

export default _entriesC;