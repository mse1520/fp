function* _keysL(obj: { [key: string]: any }) {
  for (const key in obj) yield key;
}

export default _keysL;