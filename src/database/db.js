const e = require('express');
const mongoose = require('mongoose');

const connectDatabase = () => {

    console.log("Wait connecting to the database");

    mongoose.connect("mongodb+srv://LUSOARES:LUSOARES457@cluster0.ot69lts.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }
    ).then(() => console.log("MongoDB Atlas Connected")).catch((error) => console.log(error));
};

module.exports = connectDatabase;