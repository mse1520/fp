import errorNoop from './errorNoop';

function noopHandler(predicate: Function) {
  return (error: any) => error === errorNoop ? predicate() : Promise.reject(error);
}

export default noopHandler;