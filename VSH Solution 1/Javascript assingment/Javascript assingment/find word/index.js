const fname = document.getElementById("name");
const word = document.getElementById("word");
const btn = document.getElementById("btn");
const p = document.getElementById("p");


btn.addEventListener("click", (e) => {
    e.preventDefault();
    const name = fname.value;
    const wor = word.value;
    const d = name.split(wor).length - 1;
    p.textContent = d;

});