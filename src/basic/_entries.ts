import notPromise from '@internal/notPromise';
import _entriesL from '@lazy/_entriesL';
import takeAll from './takeAll';

function _entries<T>(obj: { [key: string]: T; }) {
  return notPromise(takeAll(_entriesL(obj)));
}

export default _entries;