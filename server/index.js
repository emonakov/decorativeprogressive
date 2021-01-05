const http = require('http'); // eslint-disable-line

// create a server object:
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify({
    well: 'test1',
  })); // write a response to the client
  res.end(); // end the response
}).listen(8080); // the server object listens on port 8080
