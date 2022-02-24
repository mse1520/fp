import _pipe from '../basic/_pipe.js';
import _entriesL from '../lazy/_entriesL.js';
import _mapL from '../lazy/_mapL.js';
import _joinC from '../concurrency/_joinC.js';

const toQueryString = _pipe(
  _entriesL,
  _mapL(_joinC('=')),
  _joinC('&')
);

export default toQueryString;