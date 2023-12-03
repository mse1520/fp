/**
 * The keysL() function returns a Generator of a given object's own enumerable property names, iterated in the same order that a normal loop would.
 * @param obj The object of which the enumerable's own properties are to be returned.
 * @returns Generator.
 */
function* keysL<K extends keyof any>(obj: Record<K, any>) {
  for (const key in obj) yield key;
}

export default keysL;