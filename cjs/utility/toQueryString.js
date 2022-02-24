const _pipe = require('../basic/_pipe.js');

const _entriesL = require('../lazy/_entriesL.js');

const _mapL = require('../lazy/_mapL.js');

const _joinC = require('../concurrency/_joinC.js');

const toQueryString = _pipe(_entriesL, _mapL(_joinC('=')), _joinC('&'));

module.exports = toQueryString;