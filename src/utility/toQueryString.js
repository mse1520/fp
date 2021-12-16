import _pipe from '../basic/_pipe.js';
import _entries from '../basic/_entries.js';
import _map from '../basic/_map.js';
import _join from '../basic/_join.js';

const toQueryString = _pipe(
  _entries,
  _map(_join('=')),
  _join('&')
);

export default toQueryString;