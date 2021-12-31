const _go = require('../basic/_go.js');

const _map = require('../basic/_map.js');

const _forEach = require('../basic/_forEach.js');

const _filter = require('../basic/_filter.js');

const _take = require('../basic/_take.js');

const _join = require('../basic/_join.js');

const _identity = require('../basic/_identity.js');

const _head = require('../basic/_head.js');

const _replace = require('../basic/_replace.js');

const _split = require('../basic/_split.js');

const _push = require('../basic/_push.js');

const _regexMatch = require('../basic/_regexMatch.js');

function ipFormatter(value) {
  let overFlowFlag = false;
  return _go(value, _replace(/[^(0-9|.)]/g, ''), _split('.'), _map(_regexMatch(/25[0-5]|2[0-4][0-9]|[0-1]?[0-9]?[0-9]/g)), _forEach(v => v?.length > 1 ? overFlowFlag = true : undefined), _map(_head), _filter(_identity), v => overFlowFlag ? _push(v, ['']) : v, _take(4), _join('.'), _replace(undefined, ''));
}

module.exports = ipFormatter;