var express = require('express');
var fs = require('fs');

var dirReaderRouter = express.Router();

dirReaderRouter.route('/')
  .get(function(req, res) {
    var path;

    if (req.query.path) {
      path = req.query.path;
      fs.readdir(path, function(err, files) {
        if (err) {
          res.send(err);
        } else {
          // lob off index.asp from array because it's not a report
          var index = files.indexOf('index.asp');
          if (index > -1) {
              files.splice(index, 1);
          }
          res.jsonp(files);
        }
      });
    }
  });

module.exports = dirReaderRouter;