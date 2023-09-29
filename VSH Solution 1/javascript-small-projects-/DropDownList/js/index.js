import dom from "./app.js"
const btn = document.getElementById("btn");
const p = document.getElementById("p");

btn.addEventListener("click", (e) => {
    const fname = document.getElementById("dropdown").value;
    e.preventDefault();
    p.textContent = fname;

})