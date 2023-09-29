export default (function() {
    const container = document.getElementById("container");
    container.innerHTML = `<form action="">
    <div class="form-control">
        <select name="dropdown" id="dropdown">
            <option value="">select</option>
            <option value="tejas">Tejas</option>
            <option value="aditya">aditya</option>
            <option value="anil">anil</option>
            <option value="ravi">ravi</option>
            <option value="ram">ram</option>
            <option value="sham">sham</option>
            
        </select>
        <p id="p"></p>
    </div>
    <button type="submit" id="btn">submit</button>
</form>`
})()