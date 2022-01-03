import _go from '../basic/_go.js';
import _map from '../basic/_map.js';
import _forEach from '../basic/_forEach.js';
import _take from '../basic/_take.js';
import _join from '../basic/_join.js';
import _identity from '../basic/_identity.js';
import _head from '../basic/_head.js';
import _last from '../basic/_last.js';
import _replace from '../basic/_replace.js';
import _split from '../basic/_split.js';
import _push from '../basic/_push.js';
import _regexMatch from '../basic/_regexMatch.js';

function ipFormatter(value) {
  let overFlowFlag = false;

  return _go(
    value,
    _replace(/[^(0-9|.)]/g, ''),
    _split('.'),
    _map(_regexMatch(/25[0-5]|2[0-4][0-9]|[0-1]?[0-9]?[0-9]/g)),
    _forEach(v => v?.length > 1 ? overFlowFlag = true : undefined),
    _map(_head),
    _map(v => v ? v : ''),
    v => overFlowFlag && _last(v) !== '' ? _push(v, ['']) : v,
    _take(4),
    _join('.')
  );
}

export default ipFormatter;