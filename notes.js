const notesContainer=document.querySelector('.notes-container');
const createBtn=document.querySelector('.btn');
let notes=document.querySelectorAll('.input-box');

/* 6th part */
function showNotes(){
    notesContainer.innerHTML=localStorage.getItem("notes");
}
showNotes();
/* 3rd part */
function updateStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}
/*when we click on button input box formed check the html comment code and write the functionality of the js*/
/* 2nd part */
createBtn.addEventListener("click",()=>{
    let inputBox=document.createElement("p");
    let img=document.createElement("img");
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="recycle-bin.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})
/*for when we click on delete button the input box removed*/

/*until if 4th part */
notesContainer.addEventListener("click",function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        /*after deleting the data will be updated here we have to writge */
        updateStorage();
    }
    /* 5th part */
    elseif(e.target.tagName ==="P");{
        /*on every editabl of input box the data will be updated */
        let notes=document.querySelectorAll(".input-box");
        notes.forEach(nt=>{/*nt means notes */
            nt.onkeyup=function(){
                updateStorage();
            }
        })
    }
})
/*add local storage for saving of the notes  */

document.addEventListener("keydown",event=>{
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
/* when we ctrl+s the data will remain same that's it ok not erased*/