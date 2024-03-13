let button = document.getElementById("myButton");
button.addEventListener('click', function () {
    var randomNumber = Math.floor(Math.random() * 101);
    var a = document.createElement("div");
    a.setAttribute("class", "inside-list")
    a.setAttribute("id", `${randomNumber}`)
    let inputid = 'input-addon-';
    inputid = inputid + randomNumber;
    console.log(inputid)
    let idname = 'button-addon-';
    idname = idname + randomNumber;
    console.log(idname)
    a.innerHTML = `<input type="text" id="${inputid}">
    <button id="${idname}">Get Value</button>`;
    let b = document.getElementById('lists');
    b.appendChild(a);
    //properly till here..
    let word = document.getElementById(`${inputid}`);
    console.log(word.value);
    a = document.getElementById(`${randomNumber}`);
    let d = Math.floor(Math.random() * 101);
    let button2 = document.getElementById(`${idname}`);
    button2.addEventListener('click', function (event) {
        event.preventDefault();
        let c = document.createElement("div")
        c.setAttribute("class", "inside-list");
        c.setAttribute("id", `${d}`)
        c.innerHTML = `<input type="checkbox" id="${"List"+d}">
        <label for="${"List"+ d}">${word}</label>`;
        b.replaceChild(c,a)
    })
});