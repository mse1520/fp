import errorNoop from './errorNoop.js';

function noopHandler(target, predicate) {
  return target.catch(
    error => error === errorNoop
      ? predicate()
      : Promise.reject(error)
  );
}

export default noopHandler;