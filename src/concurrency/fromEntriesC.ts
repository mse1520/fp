import isArray from '@basic/isArray';
import reduceC from './reduceC';

/**
 * Converts arrays into objects. Pass either a single list of [key, value] pairs.
 * @param entries a single list of [key, value] pairs.
 * @returns key value object.
 */
const fromEntriesC = (entries: Iterable<any>) => reduceC(entries, (acc, item) => {
  if (!isArray(item)) {
    console.warn(`Iterator value '${item}' is not an entry object`);
    return acc;
  }

  acc[item[0]] = item[1];
  return acc;
}, {});

export default fromEntriesC;