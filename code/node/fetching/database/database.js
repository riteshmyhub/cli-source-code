const mongoose = require("mongoose");

mongoose.set("strictQuery", false); //for deprecation warning
const connect2db = mongoose.connect(
   process.env.MONGODB_URI_CLOUD, //data base url from .env//MONGODB_URI_CLOUD MONGODB_URI_local
   {
      dbName: process.env.DB_NAME, //data base name from .env
      useNewUrlParser: true, //prevent to deprecation warning
      useUnifiedTopology: true, //prevent to deprecation warning
   }
);

connect2db
   .then((data) => {
      console.log(`${process.env.DB_NAME} DB successfully connected 👍`);
      console.log(`your host connection is ${data.connection.host}`);
   })
   .catch((error) => {
      console.log(error);
   });
