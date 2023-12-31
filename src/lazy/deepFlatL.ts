import flatL from './flatL';

/**
 * Recursively flattens Iterable.
 * @param iterable conforms to the iterable protocol.
 * @returns the new flattened Generator.
 */
const deepFlatL = (iterable: Iterable<any>) => flatL(iterable, Infinity);

export default deepFlatL;