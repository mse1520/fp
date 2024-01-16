/**
 * Checks if value is classified as an Array object.
 * @param target The value to check.
 * @returns Returns true if value is an array, else false.
 */
const isArray = (target: any): target is Array<any> => Array.isArray(target);

export default isArray;