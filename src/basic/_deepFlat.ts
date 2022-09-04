import _flatL from '@lazy/_flatL';
import _takeAll from './_takeAll';

function _deepFlat<T extends Iterable<any>>(iterable: T) {
  return _takeAll(_flatL(iterable, Infinity));
}

export default _deepFlat;