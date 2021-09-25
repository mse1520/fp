import noop from './noop.js';

function catchNoop(target) {
  return (target.catch(noop), target);
}

export default catchNoop;