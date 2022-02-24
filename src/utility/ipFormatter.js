import _go from '../basic/_go.js';
import _map from '../basic/_map.js';
import _head from '../basic/_head.js';
import _last from '../basic/_last.js';
import _replace from '../basic/_replace.js';
import _split from '../basic/_split.js';
import _push from '../basic/_push.js';
import _match from '../basic/_match.js';
import _tap from '../basic/_tap.js';
import _mapL from '../lazy/_mapL.js';
import _takeL from '../lazy/_takeL.js';
import _joinC from '../concurrency/_joinC.js';

function checkOverflow(target) {
  for (const value of target) if (value?.length > 1) return true;
  return false;
}

function addPoint(target, flag) {
  return flag && _last(target) !== '' ? _push(target, '') : target;
}

function ipFormatter(value) {
  let flag = false;

  return _go(
    value,
    _replace(/[^(0-9|.)]/g, ''),
    _split('.'),
    _map(_match(/25[0-5]|2[0-4][0-9]|[0-1]?[0-9]?[0-9]/g)),
    _tap(v => flag = checkOverflow(v)),
    _mapL(_head),
    _mapL(v => v ? v : ''),
    v => addPoint(v, flag),
    _takeL(4),
    _joinC('.')
  );
}

export default ipFormatter;