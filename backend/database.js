const mongoose = require('mongoose');

// Connect to the MongoDB database
const db = process.env.MongoDBURL || "mongodb://localhost:27017/testCarousel";
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// Define the data schema
const dataSchema = new mongoose.Schema({
    id: Number,
    title: String,
    subTitle: String,
    image: String
});

// Create a model from the schema
const Data = mongoose.model('Data', dataSchema);

const ImageSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    }
});

module.exports = Data;
