var express = require('express');
var app = express();
const port = process.env.PORT || 3000;
const { connectToDb } = require('./db/connection')

app.use('/', require('./routes'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});