const express = require('express');

const app = express();
const PORT = 3000;

const articlesRoutes = require('./routes/articles');

app.get('/', (req, res) => {
  res.send('Backend is running');
});

app.use('/articles', articlesRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});