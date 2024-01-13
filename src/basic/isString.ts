const isString = (target: any): target is string => target instanceof String || typeof target === 'string';

export default isString;