import { resolve } from 'path';
import { readdir, writeFile } from 'fs/promises';
import _filterL from 'src/lazy/_filterL';
import _takeAllC from 'src/concurrency/_takeAllC';
import _go from 'src/basic/_go';
import _mapL from '@lazy/mapL';
import _flatL from 'src/lazy/_flatL';
import _takeAll from 'src/basic/_takeAll';
import _flatMapL from '@lazy/flatMapL';
import _head from 'src/basic/_head';
import _join from 'src/basic/_join';
import _curry from 'src/basic/_curry';

const SRC_PATH = resolve('src');
const INDEX_REGEX = /basic|lazy|concurrency/;
const INDEX_PATH = resolve(SRC_PATH, 'index.ts');

function getFiles(dir: string) {
  return readdir(resolve(SRC_PATH, dir));
}

function makeExportSyntax([dir, files]: [string, Promise<string[]>]): Generator<Promise<string>, void> {
  return _go(
    files,
    _mapL((file: string) => _head(file.split('.'))),
    _mapL((name: string) => `export { default as ${name} } from '@${dir}/${name}';`)
  );
}

const _writeFile = _curry((path: string, text: string) => {
  writeFile(path, text);
  return text;
});

_go(
  readdir(SRC_PATH),
  _filterL((v: string) => INDEX_REGEX.test(v)),
  _mapL((dir: string) => [dir, getFiles(dir)]),
  _flatMapL(makeExportSyntax),
  _join('\n'),
  _writeFile(INDEX_PATH),
  () => console.log('Generate index')
);