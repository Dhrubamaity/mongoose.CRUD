const mongoose = require ("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/harsh2");

const userschema = mongoose.Schema({
    imgurl: String,
    name: String,
    email: String
});

module.exports = mongoose.model("user", userschema);