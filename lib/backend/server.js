import express from 'express';
import config from '../config';
import data from './data';
import techSkillsData from './techSkillsData';
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

app.get('./pic', (req, res) => {
  res.send();
});

app.get('/techSkillsData', (req, res) => {
  res.send(techSkillsData);
});

// app.listen(config.port, config.host);
// console.info(`Running on http://${config.host}:${config.port}`);
app.listen(config.port, () => {
  console.info(`Running on port ${config.port}`);
});
