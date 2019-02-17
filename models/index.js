var mongoose = require("mongoose");
mongoose.set('debug', true);


var databaseUrl = process.env.DATABASEURL || 'mongodb://localhost/todos_api';

mongoose.connect(databaseUrl, { useNewUrlParser: true } );
//mongoose.connect('mongodb://localhost/todos_api', { useNewUrlParser: true } );

//mongoose.connect('mongodb://<name>:<password>.mlab.com:39055/todolist', { useNewUrlParser: true } );

//mongodb://Danijel:rusty1991@ds239055.mlab.com:39055/todolist
//mongoose.connect('mongodb://localhost:27017/todos_api', { useNewUrlParser: true });
//mongoose.connect('mongodb:// 127.0.0.1:27017/todos_api', { useNewUrlParser: true });

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");

