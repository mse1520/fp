import _valuesL from '@lazy/_valuesL';
import _takeAll from './_takeAll';

function _values<T>(obj: { [key: string]: T; }) {
  return _takeAll(_valuesL(obj));
}

export default _values;