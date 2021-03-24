import * as express from 'express';
import * as cors from 'cors';
import * as morgan from 'morgan';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan('combined'));

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello');
});

module.exports = app;