//JS file to add functionality to 'index.html or to-do' webpage.


//----------------------------To-Do App On Web Page-------------------------------
let inp = document.querySelector("input");
let addBtn = document.querySelector("button");
let ul = document.querySelector("ul");

addBtn.addEventListener("click", function() {
    let value = inp.value; //value entered by the user
    createListItem(value); //<li> element created with text content 'value' and appended in <ul> element
    inp.value = ""; //updated the value in the input box/field to empty
});

function createListItem(val) { //funtion to create a list item and append it to the <ul> element
    let li = document.createElement("li"); // <li> element created
    li.textContent = val; // <li> element's text content updated to 'val'
    let delBtn = createDelBtn(); // a delete button will be created
    li.append(" ", delBtn); // delete <button> appended as a child element of <li> element
    ul.appendChild(li); // <li> element appended as a child element of <ul> element.
}

function createDelBtn() { //funtion to create a delete button element
    let delBtn = document.createElement("button"); // a <button> element created to 'delete' task 
    delBtn.textContent = "Delete";
    delBtn.classList.add("delete");
    return delBtn;
}

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


