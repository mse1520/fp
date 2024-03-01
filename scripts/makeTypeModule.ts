import fs from 'node:fs';

const content = JSON.stringify({ type: 'module' });
fs.writeFile('./lib/mjs/package.json', content, err => {
  if (err) return console.error(err);

  console.log('Write type module package.json!!');
});