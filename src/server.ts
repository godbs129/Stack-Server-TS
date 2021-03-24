require('dotenv').config();

import http from 'http';
const port = process.env.PORT;

const app = require('./app');

const server = http.createServer(app);


server.listen(port, () => {
  console.log('server started at port ', port);
})