import express from 'express';
import config from '../config';
import data from './data';
import parser from 'body-parser';

const app = express();

app.use(express.static('public'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { });
});

app.get('/data', (req, res) => {
  res.send(data);
});

app.listen(config.port, () => {
  console.info(`Running on port ${config.port}`);
});
