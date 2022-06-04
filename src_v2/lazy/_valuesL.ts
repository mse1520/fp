function* _valuesL<T>(obj: { [key: string]: T; }) {
  for (const key in obj) yield obj[key];
}

export default _valuesL;