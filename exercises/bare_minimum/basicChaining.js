/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var request = require('request');

var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  return Promise.promisify(fs.readFile)(readFilePath, 'utf8')
    .then(body => {
      var options = {
        url: 'https://api.github.com/users/',
        headers: { 'User-Agent': 'request' },
        json: true  // will JSON.parse(body) for us
      };
      let githubHandle = body.split('\n')[0];
      options.url += githubHandle;
      return Promise.promisify(request.get)(options);
    })
    .then((res) => {
      return Promise.promisify(fs.writeFile)(writeFilePath, JSON.stringify(res.body));
    });
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
