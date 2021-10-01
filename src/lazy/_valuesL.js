function* _valuesL(object) {
  for (let key in object) yield object[key];
}

export default _valuesL;