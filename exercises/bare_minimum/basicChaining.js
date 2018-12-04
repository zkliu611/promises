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
const { getGitHubProfileAsync } = require('./promisification');


var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  return getGitHubProfileAsync(user)
    .then((body) => {
      console.log(body);
    })
    .catch((err) => {
      throw new Error('User already exists!')
    });
};

return db.findUserInDatabaseAsync(user)
    .then(function(existingUser) {
      if (existingUser) {
        throw new Error('User already exists!') // Head straight to `catch`. Do not pass Go, do not collect $200
      } else {
        return user; // Return a synchronous value
      }
    })
    .then(function(newUser) {
      return db.hashPasswordAsync(newUser) // Return a promise
    })
    .then(function(securedUser) {
      return db.createAndSaveUserAsync(securedUser) // Return another promise
    })

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
