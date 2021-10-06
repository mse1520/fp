import _flatL from './_flatL.js';

function _flatDeepL(iterator) {
  return _flatL(iterator, Infinity);
}

export default _flatDeepL;