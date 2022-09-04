import _keysL from '@lazy/_keysL';
import _takeAll from './_takeAll';

function _keys(obj: { [key: string]: any; }) {
  return _takeAll(_keysL(obj));
}

export default _keys;