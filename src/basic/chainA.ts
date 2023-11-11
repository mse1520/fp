interface ChainAsync<T> {
  pipe<U>(func: (value: Awaited<T>) => U): ChainAsync<U>;
  value(): Promise<T>;
}

const chainA = <T>(value: T): ChainAsync<T> => {
  return {
    pipe<U>(func: (value: Awaited<T>) => U): ChainAsync<U> {
      const _value = value instanceof Promise ? value.then(func) : func(value as Awaited<T>);
      return chainA(_value as U);
    },
    value: () => Promise.resolve(value)
  };
};

export default chainA;