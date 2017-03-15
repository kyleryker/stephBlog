angular.module('toDoList').service('toDoService', function(){

  this.Item = function(){
    item.name = input.text;
    item.status = 'ToDo';
  };


  this.move = function(item){
    if (item.status === 'ToDo'){
      item.status = 'inProgress';
    }
    else if (item.status === 'inProgress'){
      item.status = 'complete';
    }
  };
})
