const { app } = require('./app');
const { db } = require('./utils/database');
require('dotenv').config();

db();

const PORT = process.env.PORT || 4006;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
