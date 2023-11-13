import catchNoop from './catchNoop';

const passParam = (value: any, predicate: (value: any, ...args: any[]) => any, ...args: any[]) =>
  value instanceof Promise
    ? catchNoop(value.then(target => predicate(target, ...args)))
    : predicate(value, ...args);

export default passParam;