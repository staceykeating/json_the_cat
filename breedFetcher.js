const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const serverAddress = `https://api.thecatapi.com/v1/breeds/search?q=` + breedName;
  request(serverAddress, (error, response, body) => {
    if (error) {
      callback(`Error: ${error}`);
    }
    
    const data = JSON.parse(body);
    if (data[0]) {
      callback(data[0].description);
    }
  });
};
  
module.exports = { fetchBreedDescription };
