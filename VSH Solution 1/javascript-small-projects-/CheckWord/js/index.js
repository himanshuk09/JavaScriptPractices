import dom from "./app.js";


const btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
    const fname = document.getElementById("name").value;
    e.preventDefault();
    if (fname === "ram") {
        document.getElementById("ram").checked = true;
        document.getElementById("ram1").checked = true;
    } else if (fname === "sham") {
        document.getElementById("sham").checked = true;
        document.getElementById("sham1").checked = true;
    } else if (fname === "anil") {
        document.getElementById("anil").checked = true;
        document.getElementById("anil1").checked = true;
    } else {
        alert("not");
    }

})