// /**
//  * Executes a function whose return value is passed as a parameter to the next function.
//  * @param value The first parameter to run the function
//  * @param funcs Listed functions that will receive arguments
//  * @returns The result of executing all functions
//  */
// function go<T = any>(value: any, ...funcs: Function[]): T {
//   return reduce(funcs, (acc, func) => func(acc), value);
// }

// export default go;

import mapL from '@lazy/mapL';

// class Chain<T> extends Promise<T> {
//   _<TResult1 = T>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null) {
//     return this.then(onfulfilled);
//   }
// }

const chain = <T>(iterable: Iterable<T>) => {
  const chain = Promise.resolve(iterable);

  return {
    mapL: <U>(predicate: (value: T, index: number) => U) => chain.then(mapL(predicate)),
    value: () => chain
  }
};

export default chain;