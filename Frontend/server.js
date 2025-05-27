const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use(express.static(__dirname));

app.get('/fact', async (req, res) => {
  try {
    const response = await fetch('http://backend:5000/api/catfact');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch fact' });
  }
});

app.listen(3000, () => console.log('Frontend running on port 3000'));
