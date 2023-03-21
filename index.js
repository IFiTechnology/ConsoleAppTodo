const greetings = "Welcome to TimeMax: "; 
const mySlogan = "Enhancing your Productivity!!";
console.log(greetings + mySlogan);


let todoList = [];

function addTodo(item) {
  if (!item) {
    console.log("Error: Please enter a valid item.");
    return;
  }
  todoList.push(item);
  console.log(item + " has been successfully added to the list.");
}

function completeTodo(index, newItem) {
  
  todoList[index] = newItem;
  console.log("Item at index " + index + " has been succesfully completed to " + newItem + ".");
}

function deleteTodo(index) {
  let deleteMe = todoList.splice(index, 1);
  console.log(deleteMe + " has been successfully deleted from the list.");
}

function viewTodo() {
    if (todoList.length === 0) {
       console.log("Todo list is empty: Use the requisite command to add an item!!")
    } else  {
      console.log("Current Todo List: ");
      console.log(todoList);
    }
}

while (true) {
  let command = prompt("What would you like to do? (add, complete, delete, view, exit):");
  if (command === "add") {
    
    let item = prompt("Enter an item to add:");
    addTodo(item);
    
  } else if (command === "complete") {
    
    let index = prompt("Enter the index of the item to update:");
    let newItem = prompt("Enter the new item:");
    completeTodo(index, newItem);
    
  } else if (command === "delete") {
    
    let index = prompt("Enter the index of the item to remove:");
    deleteTodo(index);
    
  } else if (command === "view") {
    
    viewTodo();
    
  } else if (command === "exit") {
    
    console.log("Thanks for using TimeMax, Hope it was helpful?");
    break;
    
  } else {
    
    console.log("Invalid command. Please enter a valid command.");
    
  }
}
