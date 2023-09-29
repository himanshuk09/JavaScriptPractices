const fname =document.getElementById("name");
const btn = document.getElementById("btn");
const ul = document.getElementById("ul");

btn.addEventListener("click",  (e) => {
    e.preventDefault();
    const n = fname.value;
    const li = document.createElement("li");
    li.textContent = n;
    ul.appendChild(li);
})
