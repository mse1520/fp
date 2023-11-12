type ChainValue<T> = T extends Promise<infer U> ? Promise<U> : T;
type ChainPipeValue<T> = T extends Promise<infer U> ? Awaited<U> : T;

const chainA = <T>(value: ChainValue<T>) => {
  return {
    value: () => value instanceof Promise ? value as Promise<Awaited<T>> : Promise.resolve(value),
    pipe<U>(func: (value: ChainPipeValue<T>) => U) {
      const _value = value instanceof Promise ? value.then(func) : func(value as ChainPipeValue<T>);
      return chainA(_value as ChainValue<U>);
    },
    catch<U>(reject: (error: any) => U) {
      return chainA(this.value().catch(reject));
    },
    finally(onfinally: () => void) {
      return chainA(this.value().finally(onfinally));
    }
  };
};

export default chainA;