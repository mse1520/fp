import keysL from '@lazy/keysL';
import takeAll from './takeAll';

/**
 * The keys() function returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
 * @param obj The object of which the enumerable's own properties are to be returned.
 * @returns An array of strings that represent all the enumerable properties of the given object.
 */
const keys = <K extends keyof any>(obj: Record<K, any>) => takeAll(keysL(obj));

export default keys;