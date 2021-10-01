import valuesL from '../lazy/valuesL.js';
import takeAllC from './takeAllC.js';

function valuesC(object) {
  return takeAllC(valuesL(object))
}

export default valuesC;