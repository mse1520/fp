import noop from './noop';

function catchNoop<T>(target: Promise<T>) {
  return (target.catch(noop), target);
}

export default catchNoop;