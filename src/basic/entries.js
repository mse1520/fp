import takeAll from './takeAll.js';
import entriesL from '../lazy/entriesL.js';

function entries(object) {
  return takeAll(entriesL(object));
}

export default entries;