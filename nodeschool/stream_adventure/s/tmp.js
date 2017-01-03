const assert = require('assert');
const fs = require('fs');
const writer = process.stdout;
const reader = process.stdin;
writer.on('pipe', function (src) {
  console.error('something is piping into the writer');
  assert.equal(src, reader,'Not equals');
});
reader.pipe(writer);
