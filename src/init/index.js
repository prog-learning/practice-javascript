const fs = require('fs');
var path = require('path');

const fileList = fs.readdirSync('./src/practice/');

fs.writeFileSync(
  path.resolve('./src/init/', 'file-list.json'),
  JSON.stringify(fileList, null, '  '),
  'utf-8',
);
