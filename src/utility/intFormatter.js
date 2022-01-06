import _map from '../basic/_map.js';
import _go from '../basic/_go.js';
import _join from '../basic/_join.js';
import _replace from '../basic/_replace.js';

function replaceHead(value, index) {
  return index === 0
    ? value === '.' ? '' : value
    : value === '+' || value === '-' ? '' : value;
}

function intFormatter(value) {
  return _go(
    value,
    _replace(/[^0-9|+|\-]/g, ''),
    _map(replaceHead),
    _join(''),
    _replace(undefined, '')
  );
}

export default intFormatter;