const request = require('request');

const makeRequest = (serverAddress, localPath) => {
  request(serverAddress, (error, response, body) => {
    if (error) {
      console.log(`error!`,error);
    }
    const data = JSON.parse(body);
    console.log(data[0].description);
    //console.log(typeof data);
  });
};
  
const fetcher = () => {
  const input = process.argv.slice(2);
  //const [server, path] = [input[0], input[1]]
  const urlToSearch = "https://api.thecatapi.com/v1/breeds/search?q="
  makeRequest(urlToSearch+input[0]);
};

fetcher();