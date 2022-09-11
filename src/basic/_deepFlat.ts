import _flatL from '@lazy/_flatL';
import takeAll from './takeAll';

function _deepFlat<T extends Iterable<any>>(iterable: T) {
  return takeAll(_flatL(iterable, Infinity));
}

export default _deepFlat;