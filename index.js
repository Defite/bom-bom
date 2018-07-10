const fs = require('fs');
const stripBom = require('strip-bom');

const path = __dirname + '/example/with_bom.js';

fs.readFile(path, 'utf8', (err, contents) => {
    console.log('Read file');

    const newFileContents = stripBom(contents);

    fs.writeFile(path, newFileContents, { encoding: 'utf8' }, (err) => {
        if (err) throw err;
        console.log('Done');
    })
})