//JS file to add functionality to 'index.html or to-do' webpage.

//---------------------------To-Do App on Browser's Console----------------------
// let todo = []; //stores all the tasks 

// let req = prompt("Enter your request:"); //stores the user's request
// console.log(`User Request: ${req}`);

// while(true) { //loop to ask for user's request till the user enters "quit"
//     if(req == "list") { //list all tasks feature
//         if(todo.length == 0) { 
//             alert("The To-Do list is empty. Kindly add tasks to the list");
//             console.log("Empty To-Do List"); 
//             req = prompt("Enter your request:"); //stores the user's request to continue further
//             console.log(`User Request: ${req}`); //prints user request on the console
//             continue; 
//         }
//         console.log("----------------------");
//         for(let i=0; i<todo.length; i++) { //loop to print all the tasks
//             console.log(i, todo[i]); //tasks printed with its index.
//         }
//         console.log("----------------------");
//     }
//     else if(req == "add") { //add task feature
//         let task = prompt("Enter the task you want to add:"); //stores the task, which the user wants to add
//         todo.push(task.trim()); //'task' after trimming, pushed at the end of 'todo' array
//         console.log(`Task Added: "${task.trim()}"`); //prints the added task on the console
//     }
//     else if(req == "delete") { //delete task feature
//         // let task = prompt("Enter the task you want to delete:"); //stores the task, which the user wants to delete
//         // let idxOfTask = todo.indexOf(task); //'idxOfTask' var stores the index of 'task' in the 'todo' array.
//         let idxOfTask = prompt("Enter the index of the task in the list"); //'idxOfTask' var stores the index of 'task' in the 'todo' array.
//         let delTask = todo.splice(idxOfTask.trim(), 1); //'splice' array method to delete the task using its index from the 'todo' array and store it in 'delTask' var
//         console.log(`Task Deleted: "${delTask}"`); //prints "task deleted" on the console
//     }
//     else if(req == "quit") { // quit todo app feature
//         console.log("Quitting app...");
//         break; //loops ends
//     }
//     else {
//         alert("Wrong request! Please enter the correct request.");
//         console.log("Wrong request!");
//     }

//     req = prompt("Enter your request:"); //stores the user's request to continue further
//     console.log(`User Request: ${req}`); //prints user request on the console
// }




//----------------------------To-Do App On Web Page-------------------------------
let inp = document.querySelector("input");
let addBtn = document.querySelector("button");
let ul = document.querySelector("ul");

function createDelBtn() { //funtion to create a delete button element
    let delBtn = document.createElement("button"); // a <button> element created to 'delete' task 
    delBtn.textContent = "Delete";
    delBtn.classList.add("delete");
    return delBtn;
}

function createListItem(val) { //funtion to create a list item and append it to the <ul> element
    let li = document.createElement("li"); // <li> element created
    li.textContent = val; // <li> element's text content updated to 'val'
    let delBtn = createDelBtn(); // a delete button will be created
    li.append(" ", delBtn); // delete <button> appended as a child element of <li> element
    ul.appendChild(li); // <li> element appended as a child element of <ul> element.
}


addBtn.addEventListener("click", function() {
    let value = inp.value; //value entered by the user
    createListItem(value); //<li> element created with text content 'value' and appended in <ul> element
    inp.value = ""; //updated the value in the input box/field to empty
});

//This below commented code will not work.
// let delBtns = document.querySelectorAll(".delete");
// for (delBtn of delBtns) {
//     delBtn.addEventListener("click", function() {
//         let par = this.parentElement; //parent element of delBtn is the <li> element
//         console.log(par); //print the <li> element on the console
//         ul.removeChild(par); //<li> element which is a child element of <ul> element is removed. 
//     });
// }

//Using event delegation to make the events triggered for new elements:
ul.addEventListener("click", function(event) {
    if(event.target.tagName == "BUTTON") {
        let listItem = event.target.parentElement; // parent element of delBtn is the <li> element
        ul.removeChild(listItem); //<li> element which is a child element of <ul> element is removed.
    }
    //'target' property stores the element which triggered the event.
    //'nodeName' property of every object/element, stores the name or type of element/node/object.
    //'tagName' property of every object/element, stores the tag name of element/object.
});


