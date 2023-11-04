const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

app.post('/receive_token', (req, res) => {
  console.log('Received token:', req.body.token);
  // Here you can also save the token or perform further actions
    res.status(200).send(req.body.token);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
