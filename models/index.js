var mongoose = require("mongoose");
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/todos_api', { useNewUrlParser: true } );
//mongoose.connect('mongodb://localhost:27017/todos_api', { useNewUrlParser: true });
//mongoose.connect('mongodb:// 127.0.0.1:27017/todos_api', { useNewUrlParser: true });

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");

