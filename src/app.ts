import * as express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan('combined'));

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello World!');
});

module.exports = app;