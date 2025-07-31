const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Database Connected Successfully');
  })
  .catch(err => {
    console.error('❌ Database Connection Failed:', err);
  });

module.exports = mongoose;
