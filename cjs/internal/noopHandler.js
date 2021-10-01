const errorNoop = require('./errorNoop.js');

function noopHandler(target, predicate) {
  return target.catch(error => error === errorNoop ? predicate() : Promise.reject(error));
}

module.exports = noopHandler;