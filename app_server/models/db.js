const mongoose = require ('mongoose');

mongoose.connect(
  "mongodb://isaactovar160:root@mymovieplace-shard-00-00-xhoqo.mongodb.net:27017,mymovieplace-shard-00-01-xhoqo.mongodb.net:27017,mymovieplace-shard-00-02-xhoqo.mongodb.net:27017/test?ssl=true&replicaSet=MyMoviePLace-shard-0&authSource=admin&retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;
db.on('error',(error) => console.error(error));
db.once('open', () => console.log ('Connected Succesfully'));


