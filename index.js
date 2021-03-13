/** Express module configurations */
const express = require('express');

const app = express();
const port = 8080;

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

app.get('/api/hello-world', (req, res) => {
  res.send('hello world');
});
