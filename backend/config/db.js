const mongoose = require('mongoose');

const connectDB=async()=>{
    try {
        const conn = await mongoose.connect('mongodb+srv://mohithrocky40:mohith123456@cluster0.tqjnrfl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log(`MongoDB Connected:${conn.connection.host} `);
    } catch (error) {
        console.log(`Error :${error.message}`);
        process.exit(1);
    }
};
module.exports = connectDB;