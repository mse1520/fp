import catchNoop from './catchNoop';

const passParam = (value: any, predicate: (value: any, ...args: any[]) => any, ...args: any[]) =>
  value instanceof Promise
    ? catchNoop(value.then(value => predicate(value, ...args)))
    : predicate(value, ...args);

export default passParam;