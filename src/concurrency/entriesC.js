import entriesL from '../lazy/entriesL.js';
import takeAllC from './takeAllC.js';

function entriesC(object) {
  return takeAllC(entriesL(object));
}

export default entriesC;