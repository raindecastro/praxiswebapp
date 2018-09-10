const express = require('express');
const os = require('os');

const app = express();

app.use(express.static(__dirname + '/dist'));
app.get('/api/getUsername', (req, res) =>
  res.send({ username: 'Rain de Castro' })
);
app.listen(process.env.PORT || 8080, () =>
  console.log('Listening on port 8080!')
);
