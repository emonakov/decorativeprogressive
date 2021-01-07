const express = require('express'); // eslint-disable-line
require('dotenv').config({ path: '.env.local' }) // eslint-disable-line

const handle = require('../api/signUpload'); // eslint-disable-line

const app = express();
const port = '8080';

app.use(express.json());

app.use('/api/signUpload', handle);
app.use('/api/destroy', (req, res) => res.json('ok'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
