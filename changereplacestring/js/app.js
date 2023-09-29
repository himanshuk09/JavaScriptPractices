export default (function() {
    const container = document.getElementById("container");


    container.innerHTML += `<form action="">
    <div class="form-control">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter the name" required>
    </div>
    <div class="form-control">
        <label for="char">Replace char:</label>
        <input type="text" id="char" name="char" placeholder="Enter the the character" required>
    </div>
    <div class="form-control">
        <label for="NewChar">New char:</label>
        <input type="text" id="NewChar" name="NewChar" placeholder="Enter the New character" required>
    </div>
    <button type="submit" id="btn">Check</button>
</form>`
})()