const express = require('express');


// create new express app and save it as "app"
const app = express();
// moongoes below the app always
const db = require('./config/db');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', require('./router/routes'));

// server configuration
const PORT = 8001;

// create a route for the app
app.get('/', (req, res) => {
    res.send('Hello World');
});

// make the server listen to requests
app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}/`);
});