const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post('/receive_token', (req, res) => {
  console.log('Received token:', req.body.token);
  // Here you can also save the token or perform further actions
  res.status(200).send('Token received');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
