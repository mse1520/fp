const releasePromise = require('../internal/releasePromise.js');

const take = require('./take.js');

function head(iterator) {
  return releasePromise(take(iterator, 1), ([value]) => value);
}

module.exports = head;