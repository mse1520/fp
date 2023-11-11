interface Chain<T> {
  pipe<U>(func: (value: Awaited<T>) => U): Chain<U>;
  value(): T;
}

const chain = <T>(value: T): Chain<T> => {
  if (value instanceof Promise) {
    console.warn('The chain function does not accept Promise.');
    return chain(undefined as T);
  }

  return {
    pipe: <U>(func: (value: Awaited<T>) => U) => chain(func(value as Awaited<T>)),
    value: () => value as T
  };
};

export default chain;