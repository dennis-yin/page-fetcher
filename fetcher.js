const request = require('request');
const fs = require('fs');
const args = process.argv;
const URL = args[2];
const path = args[3];
// const path = './index.html';

request(URL, (error, response, body) => {
  if (error) {
    console.log("Couldn't reach the site");
    return;
  }
  fs.writeFile(path, body, (err) => {
    if (err) {
      return console.log(err);
    }
    let stats = fs.statSync(path.slice(2));
    let size = stats['size'];
    console.log(`Downloaded and saved ${size} bytes to ${path}`);
  })
});