/**
 * Checks if value is classified as a String primitive or object.
 * @param target The value to check.
 * @returns Returns true if value is a string, else false.
 */
const isString = (target: any): target is string => target instanceof String || typeof target === 'string';

export default isString;