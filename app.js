//JS file to add functionality to 'index.html or to-do' webpage.


//---------------------------To-Do App on Browser's Console----------------------
let todo = []; //stores all the tasks 

let req = prompt("Enter your request:"); //stores the user's request
console.log(`User Request: ${req}`);

while(true) { //loop to ask for user's request till the user enters "quit"
    if(req == "list") { //list all tasks feature
        if(todo.length == 0) { 
            alert("The To-Do list is empty. Kindly add tasks to the list");
            console.log("Empty To-Do List"); 
            req = prompt("Enter your request:"); //stores the user's request to continue further
            console.log(`User Request: ${req}`); //prints user request on the console
            continue; 
        }
        console.log("----------------------");
        for(let i=0; i<todo.length; i++) { //loop to print all the tasks
            console.log(i, todo[i]); //tasks printed with its index.
        }
        console.log("----------------------");
    }
    else if(req == "add") { //add task feature
        let task = prompt("Enter the task you want to add:"); //stores the task, which the user wants to add
        todo.push(task.trim()); //'task' after trimming, pushed at the end of 'todo' array
        console.log(`Task Added: "${task.trim()}"`); //prints the added task on the console
    }
    else if(req == "delete") { //delete task feature
        // let task = prompt("Enter the task you want to delete:"); //stores the task, which the user wants to delete
        // let idxOfTask = todo.indexOf(task); //'idxOfTask' var stores the index of 'task' in the 'todo' array.
        let idxOfTask = prompt("Enter the index of the task in the list"); //'idxOfTask' var stores the index of 'task' in the 'todo' array.
        let delTask = todo.splice(idxOfTask.trim(), 1); //'splice' array method to delete the task using its index from the 'todo' array and store it in 'delTask' var
        console.log(`Task Deleted: "${delTask}"`); //prints "task deleted" on the console
    }
    else if(req == "quit") { // quit todo app feature
        console.log("Quitting app...");
        break; //loops ends
    }
    else {
        alert("Wrong request! Please enter the correct request.");
        console.log("Wrong request!");
    }

    req = prompt("Enter your request:"); //stores the user's request to continue further
    console.log(`User Request: ${req}`); //prints user request on the console
}
