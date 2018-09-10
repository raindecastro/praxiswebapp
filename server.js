const express = require('express');
const os = require('os');
const path = require('path');
const app = express();

if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('dist'));

  // Express serve up index.html file if it doesn't recognize route
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
  });
}

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) =>
  res.send({ username: 'Rain de Castro' })
);
app.listen(process.env.PORT || 8080, () =>
  console.log('Listening on port 8080!')
);
