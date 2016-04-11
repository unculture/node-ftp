var list = `
/uk/test/86723252/DYNAMICTEST/creative/5f18f104-6889-4fef-8c48-b407ef26d42e:
drwxr-x---   5 ftp      ftp          4096 Mar 26 13:20 .
drwxr-x---   3 ftp      ftp          4096 Mar 26 11:57 ..
drwxr-x---   2 ftp      ftp          4096 Mar 26 13:20 css
drwxr-x---   3 ftp      ftp          4096 Mar 26 13:20 img
drwxr-x---   3 ftp      ftp          4096 Mar 26 13:20 js

/uk/test/86723252/DYNAMICTEST/creative/5f18f104-6889-4fef-8c48-b407ef26d42e/css:
drwxr-x---   2 ftp      ftp          4096 Mar 26 13:20 .
drwxr-x---   5 ftp      ftp          4096 Mar 26 13:20 ..

/uk/test/86723252/DYNAMICTEST/creative/5f18f104-6889-4fef-8c48-b407ef26d42e/img:
drwxr-x---   3 ftp      ftp          4096 Mar 26 13:20 .
drwxr-x---   5 ftp      ftp          4096 Mar 26 13:20 ..
drwxr-x---   2 ftp      ftp          4096 Mar 26 13:20 icons

/uk/test/86723252/DYNAMICTEST/creative/5f18f104-6889-4fef-8c48-b407ef26d42e/img/icons:
drwxr-x---   2 ftp      ftp          4096 Mar 26 13:20 .
drwxr-x---   3 ftp      ftp          4096 Mar 26 13:20 ..

/uk/test/86723252/DYNAMICTEST/creative/5f18f104-6889-4fef-8c48-b407ef26d42e/js:
drwxr-x---   3 ftp      ftp          4096 Mar 26 13:20 .
drwxr-x---   5 ftp      ftp          4096 Mar 26 13:20 ..
drwxr-x---   2 ftp      ftp          4096 Mar 26 13:20 vendor
`;

var assert = require('assert');
var Parser = require('../lib/parser.js');

var RE_EOL = /\r?\n/g;

var entries,
    result

entries = list.split(RE_EOL);
    
result = Parser.parseRecursiveList(entries);

console.log(result);
