export default (function() {
    const container = document.getElementById("container");


    container.innerHTML = `<form action="">
    <div class="form-control">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter the name" required>
    </div>

    <button type="submit" id="btn">check</button>
    <div class="radio">
        <input type="radio" name="name" id="ram" value="ram">
        <label for="ram">ram</label>
        <input type="radio" name="name" id="anil" value="anil">
        <label for="ram">anil</label>
        <input type="radio" name="name" id="sham" value="sham">
        <label for="ram">sham</label>
    </div>
    <div class="checkbox">
        <input type="checkbox" name="check" id="ram1" value="ram">
        <label for="ram1">ram</label>
        <input type="checkbox" name="check" id="anil1" value="anil">
        <label for="anil1">anil</label>
        <input type="checkbox" name="check" id="sham1" value="sham">
        <label for="sham1">sham</label>
    </div>
</form>`
})()