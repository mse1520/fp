const _pipe = require('../basic/_pipe.js');

const _entries = require('../basic/_entries.js');

const _map = require('../basic/_map.js');

const _join = require('../basic/_join.js');

const toQueryString = _pipe(_entries, _map(_join('=')), _join('&'));

module.exports = toQueryString;