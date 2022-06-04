function* _entriesL<T>(obj: { [key: string]: T; }): Generator<[string, T], void> {
  for (const key in obj) yield [key, obj[key]];
}

export default _entriesL;