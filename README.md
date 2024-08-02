# Notes Application
   This is a simple notes application that allows users to create, edit, and delete notes. The application saves the notes to the browser's local storage, ensuring that the notes persist even after the page is refreshed.
  ## Features
* Create a new note by clicking the "Create Notes" button.
* Edit notes directly in the browser.
* Delete notes by clicking the recycle bin icon.
* Notes are saved automatically to local storage, so they persist across sessions.
* Prevent the default behavior of the Enter key to avoid unintended new lines.
## Files
# Index file 
```sh
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Notes</title>
    <link rel="stylesheet" href="notes.css">
</head>
<body>
    <div class="container">
        <h1><img src="sticky-note.png" alt="iconofnotes" width="45" height="50">Notes</h1>
        <button class="btn"><img src="edit.png">Create Notes</button>
        <div class="notes-container">
            <!-- Commented out initially to be displayed later using JavaScript -->
            <!-- <p contenteditable="true" class="input-box">
                <img class="delete" src="recycle-bin.png" alt="delete" width="25" height="25">
            </p> -->
        </div>
    </div>
    <script src="notes.js"></script>
</body>
</html>
```
# CSS file
```sh
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.container {
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(225deg, blue, rgb(0, 238, 255));
    color: cyan;
    padding-top: 4%;
    padding-left: 10%;
}
.container h1 {
    display: flex;
    align-items: center;
    font-size: 35px;
    font-weight: 600;
}
.container button img {
    width: 25px;
    margin-right: 8px;
}
.container button {
    display: flex;
    align-items: center;
    background: linear-gradient(135deg, cyan, blue);
    color: black;
    font-size: 16px;
    outline: 0;
    border: 0;
    border-radius: 40px;
    padding: 15px 25px;
    margin: 30px 0 20px;
    cursor: pointer;
}
.input-box {
    position: relative;
    width: 100%;
    max-width: 500px;
    min-height: 150px;
    background: rgba(20, 97, 199, 0.8);
    color: black;
    padding: 20px;
    margin: 20px 0;
    outline: none;
    border-radius: 5px;
}
.input-box img {
    position: absolute;
    bottom: 15px;
    right: 15px;
    cursor: pointer;
    width: 25px;
}
```
## JS file 
```sh
const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');

/* Display notes from local storage */
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

/* Update local storage with the current notes */
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

/* Create a new note when the "Create Notes" button is clicked */
createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "recycle-bin.png";
    notesContainer.appendChild(inputBox).appendChild(img);
});

/* Handle delete and edit events */
notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "P") {
        let notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage();
            }
        });
    }
});

/* Prevent default Enter key behavior */
document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});
```
## How to Use
* Open index.html in a web browser.
* Click the "Create Notes" button to add a new note.
* Type your note directly in the input box.
* Click the recycle bin icon to delete a note.
* Notes are automatically saved to local storage, so they will persist even if you close and reopen the browser.
## Dependencies
This application does not have any external dependencies. All the required functionality is implemented using HTML, CSS, and vanilla JavaScript.


