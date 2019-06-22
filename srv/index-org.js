import express from 'express';
// import socketIO from "socket.io";
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/app1db');

export default (app, http) => {
    app.use(express.json());
    //
    app.get('/foo', (req, res) => {
        res.json({msg: 'foo-1234BB'});
    });
  //
    app.post('/bar', (req, res) => {
        res.json(req.body);
    });
  // 
  // optional support for socket.io
  // 
  // let io = socketIO(http);
  // io.on("connection", client => {
  //   client.on("message", function(data) {
  //     // do something
  //   });
  //   client.emit("message", "Welcome");
  // });
}
