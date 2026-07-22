const express = require('express');
const axios = require('axios');
const app = express();

app.get('/fetch', async (req, res) => {
  const url = req.query.url;
  const response = await axios.get(url);
  res.send(response.data);
});

app.post('/webhook', async (req, res) => {
  const callback = req.body.callback_url;
  await axios.post(callback, { data: 'test' });
  res.json({ status: 'ok' });
});
