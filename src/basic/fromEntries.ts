import isArray from './isArray';
import reduce from './reduce';

/**
 * Converts arrays into objects. Pass either a single list of [key, value] pairs.
 * @param entries a single list of [key, value] pairs.
 * @returns key value object.
 */
const fromEntries = (entries: Iterable<any>) => reduce(entries, (acc, item) => {
  if (!isArray(item)) {
    console.warn(`Iterator value '${item}' is not an entry object`);
    return acc;
  }

  acc[item[0]] = item[1];
  return acc;
}, {});

export default fromEntries;