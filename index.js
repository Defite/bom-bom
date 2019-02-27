const fs = require('fs');
const path = require('path');
const stripBom = require('strip-bom');
const targetFolder =  process.argv[2];
const targetExtension = process.argv[3];

/**
 * Удаляет BOM из файла
 * @param {String} filePath - абсолютный путь до файла
 */
const removeFileBom = (filePath) => {
    fs.readFile(filePath, 'utf8', (err, contents) => {
        console.log('Read file ', filePath);
    
        const newFileContents = stripBom(contents);
    
        fs.writeFile(filePath, newFileContents, { encoding: 'utf8' }, (err) => {
            if (err) throw err;
            console.log('Done ', filePath);
        })
    })
}

/**
 * Прочитать содержимое директории рекурсивно
 * @param {String} dir - Директория для чтения
 * @param {callback} done -  Коллбэк по окончанию чтения директории
 */
const recurReadDir = (dir, done) => {
    let results = [];

    fs.readdir(dir, function(err, list) {
        if (err) return done(err);

        var pending = list.length;

        if (!pending) return done(null, results);

        list.forEach(function(file){
            file = path.resolve(dir, file);

            fs.stat(file, function(err, stat){
                // If directory, execute a recursive call
                if (stat && stat.isDirectory()) {
                    // Add directory to array [comment if you need to remove the directories from the array]
                    // results.push(file);

                    recurReadDir(file, function(err, res){
                        results = results.concat(res);
                        if (!--pending) done(null, results);
                    });
                } else {
                    results.push(file);
                    if (!--pending) done(null, results);
                }
            });
        });
    });
}

// Lights, camera, action!
recurReadDir(targetFolder, (err, data) => {
    if (err) throw err;

    data.filter(filterByExtension).forEach((file) => {
        removeFileBom(file)
    });
});

/**
 * Отфильтровать файлы по заданному расширению
 * @param {*} file 
 */
function filterByExtension(file) {
    const extName = path.extname(file);
    return extName === targetExtension;
}
