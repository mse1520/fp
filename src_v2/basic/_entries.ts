import notPromise from '@internal/notPromise';
import _entriesL from '@lazy/_entriesL';
import _takeAll from './_takeAll';

function _entries<T>(obj: { [key: string]: T; }) {
  return notPromise(_takeAll(_entriesL(obj)));
}

export default _entries;