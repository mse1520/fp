import _reduce from './_reduce.js';

function go(first, ...args) {
  return _reduce(args, (accumulate, func) => func(accumulate), first);
}

export default go;