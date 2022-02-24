const _go = require('../basic/_go.js');

const _map = require('../basic/_map.js');

const _head = require('../basic/_head.js');

const _last = require('../basic/_last.js');

const _replace = require('../basic/_replace.js');

const _split = require('../basic/_split.js');

const _push = require('../basic/_push.js');

const _match = require('../basic/_match.js');

const _tap = require('../basic/_tap.js');

const _mapL = require('../lazy/_mapL.js');

const _takeL = require('../lazy/_takeL.js');

const _joinC = require('../concurrency/_joinC.js');

function checkOverflow(target) {
  for (const value of target) if (value?.length > 1) return true;

  return false;
}

function addPoint(target, flag) {
  return flag && _last(target) !== '' ? _push(target, '') : target;
}

function ipFormatter(value) {
  let flag = false;
  return _go(value, _replace(/[^(0-9|.)]/g, ''), _split('.'), _map(_match(/25[0-5]|2[0-4][0-9]|[0-1]?[0-9]?[0-9]/g)), _tap(v => flag = checkOverflow(v)), _mapL(_head), _mapL(v => v ? v : ''), v => addPoint(v, flag), _takeL(4), _joinC('.'));
}

module.exports = ipFormatter;