const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');

// ! uncaught exceptions
process.on('uncaughtException', (err) => {
    console.log('UNCAUGHT EXCEPTION... 💥💥💥 Shouting down');
    console.log(err.name, err.message);
    process.exit(1);
});

dotenv.config({path: 'api/config/config.env'})
const app = require('./app');

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
// const DB = process.env.MONGOLOCAL

// create a mongoDB connection
const mongoDBConnect = async() => {
    try {
        const connect = await mongoose.connect(DB);
        console.log(`mongonDB connection set successfully HOST : ${ connect.connection.host }`.yellow);
    } catch (error) {
        console.log(error);
    }
}

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    mongoDBConnect()
    console.log(`App running on port ${port}..`);
});

console.log(port);

process.on('unhandledRejection', (err) => {
    console.log('UNHANDLED REJECTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    server.close(() => {
        process.exit(1);
    });
});