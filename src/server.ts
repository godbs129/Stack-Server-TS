require('dotenv').config();

import { createServer } from 'http';
const port = process.env.PORT;

const app = require('./app');

const server = createServer(app);


server.listen(port, () => {
  console.log('Server start ', port);
})