import takeAll from './takeAll.js';
import valuesL from '../lazy/valuesL.js';

function values(object) {
  return takeAll(valuesL(object))
}

export default values;