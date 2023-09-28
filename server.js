const app = require('./app');
const { connectToDB, disconnectToDB } = require('./databaseConnection');

connectToDB();

// listening for requests
const port = 5000;
app.listen(port, () => console.log(`Now listening on port ${port}...`));
