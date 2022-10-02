import valuesL from '@lazy/valuesL';
import takeAll from './takeAll';

/**
 * The valuesL() function returns an array of a given object's own enumerable property values.
 * @param obj The object whose enumerable own property values are to be returned.
 * @returns An array containing the given object's own enumerable property values.
 */
function values<T>(obj: { [key: string]: T; }) {
  return takeAll(valuesL(obj));
}

export default values;