const express = require('express');

const app = express();

app.use(express.static('public'));

app.listen(1234)
console.log(`servidor en el puerto ${1234}`)