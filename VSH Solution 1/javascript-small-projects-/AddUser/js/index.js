import dom from "./model.js";
const ul = document.getElementById("ul");
const fname = document.getElementById("name");
const btn = document.getElementById("btn");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    const n = fname.value;
    const li = document.createElement("li");
    li.textContent = n;
    ul.appendChild(li);

})