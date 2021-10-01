import reduce from './reduce.js';

function go(first, ...args) {
  return reduce(args, (accumulate, func) => func(accumulate), first);
}

export default go;