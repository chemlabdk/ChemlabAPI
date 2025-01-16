const express = require('express');
const config = require('./data/config.json');

//Start the express app and define the port
const app = express();
const PORT = 5500;

//Welcome message, for users exploring the API
app.all('/', (req, res) => {
    res.status(200).json({
        status: 'success',
        message: config.WelcomeMessage,
        version: config.Version
    });
});

//Start the express server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});