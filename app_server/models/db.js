const mongoose = require ('mongoose');
require ("dotenv").config();
mongoose.connect(
  process.env.DB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;
db.on('error',(error) => console.error(error));
db.once('open', () => console.log ('Connected Succesfully'));


