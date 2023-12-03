/**
 * The entriesL() function returns a Generator of a given object's own enumerable string-keyed property [key, value] pairs. 
 * @param obj The object whose own enumerable string-keyed property [key, value] pairs are to be returned.
 * @returns Generator.
 */
function* entriesL<K extends keyof any, V>(obj: Record<K, V>): Generator<[K, V], void> {
  for (const key in obj) yield [key, obj[key]];
}

export default entriesL;