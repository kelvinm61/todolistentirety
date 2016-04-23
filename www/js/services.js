angular.module('starter.services', [])


// this is where the todos will be saved when dated and saved
.factory('ToDo', function()
{
  var data = { //these are just demo to dos so its not blank when the user opens the app.
      detail: 
          [
      {title: "book hotel", added: new Date()}
             
      , {title: "pick up dry cleaning ", added: new Date()}
      , {title: "record tv", added: new Date()}
          ]
      };
      function removeItem(title)
    {
      // this line will show this function is wired up correcty
      console.log('removing:' + title);
        //this line will delete the the task
     
    //   title.todo.splice(title.indexOf(todo), 1);
    };
  //this is how the todo is added to the file along ith the current date and time
  function addToDo(title) 
    {
    data.detail.push({title: title, added: new Date()});
        console.log(data.detail);
        
    }
  // this is where the to do will be returned(added) to the list
  return{
    data: data
    , addToDo: addToDo, 
    removeItem: removeItem
  };
   
});
