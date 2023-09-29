export default (function() {
    const container = document.getElementById("container");


    container.innerHTML += `<div class="model">
    <h1>Add User</h1>
    <form action="">
        <div class="form-control">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter the name" required>
        </div>

        <button type="submit" id="btn">Add</button>
    </form>
    <div id="users">
        <ul id="ul">

        </ul>
    </div>
    <p>Looks good</p>
</div> `
})();