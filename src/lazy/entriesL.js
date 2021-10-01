function* entriesL(object) {
  for (const key in object) {
    yield object[key] instanceof Promise
      ? object[key].then(value => [key, value])
      : [key, object[key]];
  }
}

export default entriesL;