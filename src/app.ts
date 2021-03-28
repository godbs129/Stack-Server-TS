import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import * as database from './database';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan('combined'));

database.getConnection();

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello');
});

module.exports = app;