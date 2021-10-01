function* keysL(object) {
  for (let key in object) yield key;
}

export default keysL;