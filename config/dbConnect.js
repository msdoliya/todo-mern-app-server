const mongoose = require('mongoose');

const url = "mongodb+srv://mahendradoliya:doliya1998@cluster0.pyzogrp.mongodb.net/?retryWrites=true&w=majority"
const dbConnect = async () => {
  try {
    const connected = await mongoose.connect(url,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      }
    );
    console.log(`MongoDb Connected successfully`);
  } catch (error) {
    console.log(`Error occurred, ${error.message}`);
  }
};

module.exports = { dbConnect };
