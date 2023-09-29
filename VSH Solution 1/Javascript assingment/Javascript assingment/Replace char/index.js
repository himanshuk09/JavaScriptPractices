const fname = document.getElementById("name");
const char = document.getElementById("char");
const newChar = document.getElementById("NewChar");
const btn = document.getElementById("btn");


btn.addEventListener("click", (e) => {
    e.preventDefault();
    const name = fname.value;
    const char1 = char.value;
    const char2 = newChar.value;
    // console.log(name)

    const newString = name.replaceAll(char1, char2);

    alert(newString);

})