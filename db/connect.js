const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(url, {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(()=> console.log('Connected'))
    
};

module.exports = connectDB;
