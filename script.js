let btn = document.querySelector("#button button"); 
let textArea = document.getElementById("text_area");
let color = document.getElementById("color"); 
let notes_container = document.getElementById("notes_container"); 
let message = document.getElementById("message");

function addNotes() {
    let div = document.createElement("div"); 
    let cross_btn = document.createElement("button"); 
    let p = document.createElement("p"); 

   
    div.appendChild(p);
    div.appendChild(cross_btn);


    p.innerText = textArea.value; 
    cross_btn.innerText = 'X'; 

    div.style.backgroundColor = color.value; 
    div.className = "note"; 

    notes_container.appendChild(div); 


    message.style.display = "none";


    cross_btn.addEventListener('click', function() {
        div.remove();


        if (notes_container.children.length === 0) {
            message.style.display = "block";
        }
    });

    textArea.value = '';
}


btn.addEventListener("click", addNotes);
