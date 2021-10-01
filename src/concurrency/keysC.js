import keysL from '../lazy/keysL.js';
import takeAllC from './takeAllC.js';

function keysC(object) {
  return takeAllC(keysL(object));
}

export default keysC;