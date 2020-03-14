//import express for use
const express = require('express');
const app = express();

if (process.env.NODE_ENV === 'production') {
    //express will serve up production assets
    //main.js or main.css if not recornise
    app.use(express.static('stan/dist'));

    //express will serve index.html file if not recognize the route
    //if dont know the path, just kick the user back to index.html
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'stan', 'dist', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT);