//import express for use
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'stan/dist')));
//express will serve index.html file if not recognize the route
//if dont know the path, just kick the user back to index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'stan/dist/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);