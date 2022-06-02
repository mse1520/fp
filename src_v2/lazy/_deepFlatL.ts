import _flatL from './_flatL';

function _deepFlatL<T extends Iterable<any>>(iterable: T) {
  return _flatL(iterable, Infinity);
}

export default _deepFlatL;