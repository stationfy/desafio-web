import zipObject from 'lodash/zipObject';

export default function createAction(type, names) {
  return (...params) => ({ type, ...zipObject(names, params) });
}
