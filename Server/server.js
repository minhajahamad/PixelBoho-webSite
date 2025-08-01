const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
// const path = require('path');

dotenv.config();

const db = require('./db/db');

const app = express();


//middlewares
app.use(cors());
app.use(express.json());


// Serve uploaded resume files publicly
// app.use(
//   '/uploads/resumes',
//   express.static(path.join(__dirname, 'uploads/resumes'))
// );

//routes
const routes = require('./routes/index');
app.use(routes);

app.use('*', (req, res) => {
  res.status(404).json({ message: 'No Route Found For This Path' });
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
