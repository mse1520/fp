interface Chain<T> {
  value(): T;
  pipe<U>(func: (value: Awaited<T>) => U): Chain<U>;
}

const chain = <T>(value: T): Chain<T> => {
  if (value instanceof Promise) {
    console.warn('The chain function does not accept Promise.');
    return chain(undefined as T);
  }

  return {
    value: () => value as T,
    pipe: func => chain(func(value as Awaited<T>))
  };
};

export default chain;