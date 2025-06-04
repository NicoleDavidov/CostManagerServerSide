const express = require('express');
const cors = require('cors');

const costRoutes = require('./routes/costRoutes');
const userRoutes = require('./routes/userRoutes');
const aboutRoute = require('./routes/aboutRoute');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
  try {
    const message = await Promise.resolve('Server is up and running!');
    res.send(message);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// שימוש בראוטים
app.use('/api', costRoutes);
app.use('/api', userRoutes);
app.use('/api', aboutRoute);

module.exports = app;
