import curryRight from './curryRight.js';

function split(str, separator) {
  return str.split(separator);
};

export default curryRight(split);