// const fname = document.getElementById("dropdown").value;
// const p = document.getElementById("p");
// const option = document.getElementsByTagName("option");
// p.textContent = fname;
// console.log(option.value);
    const select = document.getElementById('dropdown');
    const p = document.getElementById('message');
        
select.addEventListener("change", function() {
    p.innerHTML = select.options[select.selectedIndex].text;
})
