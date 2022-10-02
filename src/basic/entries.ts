import notPromise from '@internal/notPromise';
import entriesL from '@lazy/entriesL';
import takeAll from './takeAll';

/**
 * The entries() function returns an array of a given object's own enumerable string-keyed property [key, value] pairs. 
 * @param obj The object whose own enumerable string-keyed property [key, value] pairs are to be returned.
 * @returns An array of the given object's own enumerable string-keyed property [key, value] pairs.
 */
function entries<T>(obj: { [key: string]: T; }) {
  return notPromise(takeAll(entriesL(obj)));
}

export default entries;