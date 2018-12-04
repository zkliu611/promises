/**
 * Using Promise.all, write a function, combineFirstLineOfManyFiles, that:
 *    1. Reads each file at the path in the `filePaths` array
 *    2. Plucks the first line of each file
 *    3. Joins each first line into a new file
 *      - The lines should be in the same order with respect to the input array
 *      - i.e. the second line in the new file should be the first line of `filePaths[1]`
 *    4. Writes the new file to the file located at `writePath`
 */
const Promise = require('bluebird');
const fs = require('fs');
var { pluckFirstLineFromFileAsync } = require ('../bare_minimum/promiseConstructor.js');

var combineFirstLineOfManyFiles = function(filePaths, writePath) {
  let lines = filePaths.map((filePath) => {
    return pluckFirstLineFromFileAsync(filePath);
  });
  return Promise.all(lines)
    .then(readLines => {
      let content = readLines.join('\n');
      return Promise.promisify(fs.writeFile)(writePath, content, 'utf8');
    });
};

// Export these functions so we can unit test them
module.exports = {
  combineFirstLineOfManyFiles: combineFirstLineOfManyFiles
};