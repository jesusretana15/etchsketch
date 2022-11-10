// grid = 40 rem 

const gridHTML = document.getElementById("grid");
const divsHTML = document.getElementsByTagName("div");

let div = document.createElement("div");
div.classList.add("divBox");

for (let i = 0; i < 16; i++) {
    let div = document.createElement("div");
    div.classList.add("divBox");
    gridHTML.appendChild(div);
    
}