const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const serverAddress = `https://api.thecatapi.com/v1/breeds/search?q=` + breedName;
  request(serverAddress, (error, response, body) => {
    if (error) {
      return callback(error);
    }
    
    const desc = JSON.parse(body);
    if (desc[0]) {
      return callback(null, desc[0].description);
    } else {
    return callback(null);
    }
  });
};
  
module.exports = { fetchBreedDescription };
