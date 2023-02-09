const http = require('http'); // importing http
const app = require('./app'); // imports the local apps.js file - the request handler


const port = process.env.PORT || 9000; // specifying port running the server

const server = http.createServer(app);

server.listen(port);
