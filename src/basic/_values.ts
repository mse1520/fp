import _valuesL from '@lazy/_valuesL';
import takeAll from './takeAll';

function _values<T>(obj: { [key: string]: T; }) {
  return takeAll(_valuesL(obj));
}

export default _values;