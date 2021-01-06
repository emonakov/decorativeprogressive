const express = require('express'); // eslint-disable-line
require('dotenv').config({ path: '.env.local' }) // eslint-disable-line

const handle = require('../api/signUpload'); // eslint-disable-line

const app = express();
const port = '8080';

app.use(express.json());

app.use('/', handle);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
