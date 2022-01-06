const _map = require('../basic/_map.js');

const _go = require('../basic/_go.js');

const _join = require('../basic/_join.js');

const _replace = require('../basic/_replace.js');

function replaceHead(value, index) {
  return index === 0 ? value === '.' ? '' : value : value === '+' || value === '-' ? '' : value;
}

function intFormatter(value) {
  return _go(value, _replace(/[^0-9|+|\-]/g, ''), _map(replaceHead), _join(''), _replace(undefined, ''));
}

module.exports = intFormatter;