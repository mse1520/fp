function* _keysL(object) {
  for (let key in object) yield key;
}

export default _keysL;