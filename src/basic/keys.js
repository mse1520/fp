import takeAll from './takeAll.js';
import keysL from '../lazy/keysL.js';

function keys(object) {
  return takeAll(keysL(object));
}

export default keys;