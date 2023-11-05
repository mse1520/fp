function isString(target: any): target is string {
  return typeof target === 'string' || target instanceof String;
}

export default isString;