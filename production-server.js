const express = require('express');
const compression = require('compression');

const app = express();
const router = express.Router();

app.use(express.static(`${__dirname}/build`));
app.use(compression());

app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/build/index.html`);
});

app.use('/', router);

app.listen(3000, () => {
  // eslint-disable-next-line
  console.log('amc-client - running - on 3000');
});
