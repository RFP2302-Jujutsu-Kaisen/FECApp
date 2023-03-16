const express = require('express');
// const cors = require('cors');
const path = require('path');

const app = express();

// middleware
// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors);

// static page
app.use(express.static(path.join(__dirname, '../client/dist')));

// create Port and listen
const PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log(`Server listening at http:/localhost: ${PORT}`);
