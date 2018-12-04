/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = function(filePath) {
  var promise1 = new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, fileData) => {
      if (err) {
        reject(err);
      } else {
        let lines = fileData.split('\n');
        resolve(lines[0]);
      }
    });
  });
  return promise1;
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  var promise1 = new Promise((resolve, reject) => {
    request(url, null, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res.statusCode);
      }
    });
  });
  return promise1;
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
