// Get references to HTML elements
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a new task
function addTask() {
    if (inputBox.value === "") {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        // Add a delete icon/button
        let span = document.createElement("span");
        span.innerHTML = "×";
        li.appendChild(span);
    }
    inputBox.value = ""; // Clear the input box
}
