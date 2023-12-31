import takeAll from './takeAll';
import deepFlatL from '@lazy/deepFlatL';

/**
 * Recursively flattens array.
 * @param iterable conforms to the iterable protocol.
 * @returns the new flattened array.
 */
const deepFlat = (iterable: Iterable<any>) => takeAll(deepFlatL(iterable));

export default deepFlat;