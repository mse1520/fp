/**
 * The valuesL() function returns a Generator of a given object's own enumerable property values.
 * @param obj The object whose enumerable own property values are to be returned.
 * @returns Generator.
 */
function* valuesL<V, K extends keyof any>(obj: Record<K, V>) {
  for (const key in obj) yield obj[key];
}

export default valuesL;