import entriesL from '@lazy/entriesL';
import takeAll from './takeAll';

/**
 * The entries() function returns an array of a given object's own enumerable string-keyed property [key, value] pairs. 
 * @param obj The object whose own enumerable string-keyed property [key, value] pairs are to be returned.
 * @returns An array of the given object's own enumerable string-keyed property [key, value] pairs.
 */
const entries = <K extends keyof any, V>(obj: Record<K, V>) => takeAll(entriesL(obj));

export default entries;