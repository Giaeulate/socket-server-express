const express = require('express');
const path = require('path');
require('dotenv').config();

// app express
const app = express();

// node server
const server = require('http').createServer(app);
// const io = require('socket.io')(server);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');


// path publico
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

server.listen(process.env.PORT, (err) => {
    if (err) throw new Error(err);
    console.log('Servidor corriendo puerto', process.env.PORT);
});