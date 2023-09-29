const ul = document.getElementById("ul");
const fname = document.getElementById("name");
const btn = document.getElementById("btn");


btn.addEventListener("click", (e) => {
    e.preventDefault();
    const n = fname.value;
    const li = document.createElement("li");
    li.textContent = n;
    ul.appendChild(li);
    // const p = document.createElement("p");
    // p.textContent = "Looks Good"
    // const ull = ul.parentElement;
    // ull.appendChild(p);

})