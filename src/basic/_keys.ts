import _keysL from '@lazy/_keysL';
import takeAll from './takeAll';

function _keys(obj: { [key: string]: any; }) {
  return takeAll(_keysL(obj));
}

export default _keys;