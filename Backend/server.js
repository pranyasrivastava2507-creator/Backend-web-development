const express = require('express');
const app = express();
const port=process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Server ready');
});

app.get('/jokes', (req, res) => {
  const jokes = [
    {
        id:1,
        title:"Joke 1"
    },
    {
        id:2,
        title:"Joke 2"
    },
    {
        id:3,
        title:"Joke 3"
    }
  ];
  res.send(jokes);
});

app.get('/login', (req, res) => {
  res.send('Login Page');
});

app.listen(process.env.port || 4000, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});