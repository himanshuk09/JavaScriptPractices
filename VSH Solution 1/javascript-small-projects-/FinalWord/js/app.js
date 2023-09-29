export default (function() {
    const container = document.getElementById("container");


    container.innerHTML += `<div class="model">
    <form action="">
        <div class="form-control">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter the name" required>
        </div>
        <div class="form-control">
            <label for="word">Word:</label>
            <input type="text" id="word" name="word" placeholder="Enter the word" required>
        </div>
        <button type="submit" id="btn">Check</button>
    </form>
    <div id="count">
        <p id="p"></p>
    </div>
</div>`
})()