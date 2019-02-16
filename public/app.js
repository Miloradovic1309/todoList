/* global $ */

$(document).ready(function(){
    $.getJSON("/api/todos")
    /*.then(function(data){
        console.log(data);
    });*/
    .then(addTodos);


    $('#todoInput').keypress(function(event){
        if(event.which == 13){
            createTodo();
        }
    });

    /*$('.task').on('click', function(){
        console.log("CLICKED"); 


    });*/

    $('.list').on('click', 'li', function(){
        //alert('cicked');
        //console.log($(this));
        updateTodo($(this));
    })



    $('.list').on('click', 'span', function(e){
        //console.log("CLICKED");
        //console.log($(this).parent().data('id'));

        /*var clickedId = $(this).parent().data('id');
        var deleteUrl = '/api/todos/' + clickedId;
        $(this).parent().remove();
        $.ajax({
            method: 'DELETE',
            url: deleteUrl
        })
        .then(function(data){
            console.log(data);            
        });*/

        e.stopPropagation();
        removeTodo($(this).parent());
        
    });
});

function addTodos(todos){
    // add todos to page here
    todos.forEach(function(todo) {
        addTodo(todo);        
    });
}

function addTodo(todo){
    var newTodo = $('<li class="task">'+ todo.name + ' <span>X</span>' + '</li>');   
    newTodo.data('id', todo._id);    
    newTodo.data('completed', todo.completed);
    if(todo.completed){
        newTodo.addClass("done");        
    }
    $('.list').append(newTodo);
}

function createTodo(){
    //send request to create new todo
    var usrInput = $("#todoInput").val();
    //console.log(usrInput);
    $.post('/api/todos', {name: usrInput})
    .then(function(newTodo){
        //console.log(newTodo);
        $("#todoInput").val('');
        addTodo(newTodo);        
    })
    .catch(function(err){
        console.log(err);
    });
}

function removeTodo(todo){
    var clickedId = todo.data('id');
    var deleteUrl = '/api/todos/' + clickedId;
    
    $.ajax({
        method: 'DELETE',
        url: deleteUrl
    })
    .then(function(data){
        //console.log(data);          
        todo.remove();  
    })
    .catch(function(err){
        console.log(err);
    })
}



function updateTodo(todo){
    //console.log(todo.data('completed'));

    var updateUrl = '/api/todos/' + todo.data('id');

                    // {completed: true or false}
    var isDone = !todo.data('completed');
    var updateData = {completed: isDone}
    //console.log(updateData);

    $.ajax({
        method: 'PUT',
        url: updateUrl,
        data: updateData
    })
    .then(function(updatedTodo){
        //console.log(updatedTodo);
        todo.toggleClass('done');
        todo.data('completed', isDone);
    });


}