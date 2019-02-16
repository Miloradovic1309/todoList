
var db = require('../models');

exports.getTodos = function(req, res){
    //res.send("HELLO FROM TODOS ROUTES");
    db.Todo.find()
    .then(function(todos){
        res.json(todos);
    })
    .catch(function(err){
        res.send(err);
    })
};

exports.createTodo = function(req, res){
    //res.send("This is the post route"); 
    //console.log(req.body);
    db.Todo.create(req.body)
    .then(function(newTodo){
        res.status(201).json(newTodo);
    })
    .catch(function(err){
        res.send(err);
    });
 };

 exports.getTodo = function(req, res){
    db.Todo.findById(req.params.todoId)
    .then(function(foundTodo){
        console.log(foundTodo);
        res.json(foundTodo);
    })
    .catch(function(err){
        res.send(err);
    });
};

exports.updateTodo = function(req, res){
    //res.send("UPDATE ROUTE!");
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
    .then(function(todo){
        res.json(todo);
    })
    .catch(function(err){
        res.send(err);
    });
};

exports.deleteTodo =  function(req, res){
    //res.send("OK OK ILL DELETE SOMETHING");
    db.Todo.remove({_id: req.params.todoId})
    .then(function(){
        res.json({message: 'We deleted it!'});
    })
    .catch(function(err){
        res.send(err);
    });
};


module.exports = exports;