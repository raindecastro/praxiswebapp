const express = require('express');
const os = require('os');

const app = express();

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) =>
  res.send({ username: 'Rain de Castro' })
);
app.listen(8080, () => console.log('Listening on port 8080!'));
