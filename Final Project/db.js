const mongoose = require('mongoose');

async function DB() {
    try {
        await mongoose.connect("mongodb://localhost:27017/hostel", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected Database");
    } catch (error) {
        console.log("Error occurred in Database", error);
    }
}

module.exports = DB;