import { resolve } from 'path';
import { readdir, writeFile } from 'fs/promises';
import _filterL from '@lazy/_filterL';
import _takeAllC from '@concurrency/_takeAllC';
import _go from '@basic/_go';
import _mapL from '@lazy/_mapL';
import _flatL from '@lazy/_flatL';
import _takeAll from '@basic/_takeAll';
import _flatMapL from '@lazy/_flatMapL';
import _head from '@basic/_head';
import _join from '@basic/_join';
import _curry from '@basic/_curry';

const SRC_PATH = resolve('src_v2');
const INDEX_REGEX = /basic|lazy|concurrency/;
const INDEX_PATH = resolve(SRC_PATH, 'index.ts');

function getFiles(dir: string) {
  return readdir(resolve(SRC_PATH, dir));
}

function makeExportSyntax([dir, files]: [string, Promise<string[]>]): Generator<Promise<string>, void> {
  return _go(
    files,
    _mapL((file: string) => _head(file.split('.'))),
    _mapL(name => `export { default as ${name} } from '@${dir}/${name}';`)
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