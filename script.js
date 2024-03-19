// button.addEventListener('click', function () {
    //     var randomNumber = Math.floor(Math.random() * 101);
    //     var a = document.createElement("div");
    //     a.setAttribute("class", "inside-list")
//     a.setAttribute("id", `${randomNumber}`)
//     let inputid = 'input-addon-';
//     inputid = inputid + randomNumber;
//     console.log(inputid)
//     let idname = 'button-addon-';
//     idname = idname + randomNumber;
//     console.log(idname)
//     a.innerHTML = `<input type="text" id="${inputid}">
//     <button id="${idname}">Get Value</button>`;
//     let b = document.getElementById('lists');
//     b.appendChild(a);
//     //properly till here..
//     let word = document.getElementById(`${inputid}`);
//     console.log(word.value);
//     a = document.getElementById(`${randomNumber}`);
//     let d = Math.floor(Math.random() * 101);
//     let button2 = document.getElementById(`${idname}`);
//     button2.addEventListener('click', function (event) {
//         event.preventDefault();
//         let c = document.createElement("div")
//         c.setAttribute("class", "inside-list");
//         c.setAttribute("id", `${d}`)
//         c.innerHTML = `<input type="checkbox" id="${"List"+d}">
//         <label for="${"List"+ d}">${word}</label>`;
//         b.replaceChild(c,a)
//     })
// });

// function addvalue(task) {
//     let lastId = parseInt(localStorage.getItem("lastId") || "0");
//     let newId = lastId + 1;
//     localStorage.setItem("lastId", newId.toString());
    
//     var a = document.createElement("div");
//     a.setAttribute("class", "inside-list container")
//     a.setAttribute("id", `${newId}`);
//     a.innerHTML =`<input type="checkbox" id="${"List-" + newId}">
//         <label for="${"List-" + newId}">${task}</label>`
//     let c = document.getElementById("lists");
//     c.appendChild(a);
//     localStorage.setItem(newId.toString(), task);
// };

// function loadlist(){
//     let lastId = parseInt(localStorage.getItem("lastId") || "0");
//     for (let i = 1; i <= lastId; i++) {
//         let value = localStorage.getItem(i.toString());
//         if (value !== null) {
//             var a = document.createElement("div");
//             a.setAttribute("class", "inside-list container");
//             a.setAttribute("id", `${i}`);
//             a.innerHTML = `<input type="checkbox" id="${"List" + i}">
//                 <label for="${"List" + i}">${value}</label>`;
//             let c = document.getElementById("lists");
//             c.appendChild(a);
//         }
//     }
// }
// let button = document.getElementById("myButton");
// button.addEventListener('click', function () {
//     // var randomNumber = Math.floor(Math.random() * 101);

//     let b = prompt("Enter the TO DO list below: ");
//     if (b) {
//         addvalue(b);
//     }
// });

// document.addEventListener('DOMContentLoaded', function() {
//     loadlist();

//     let listsContainer = document.getElementById("lists");
//     listsContainer.addEventListener('change', function(event) {
//         if (event.target.type === 'checkbox') {
//             console.log('Checkbox ID:', event.target.id, 'Checked:', event.target.checked);
//             console.log(event.target.type)
//             // You can add any logic you want to execute when a checkbox is checked here.
//             // For example, updating the item's status in localStorage or changing the appearance of the item.
//         }
//     });
// });

// New code started from here

function addvalue(task) {
    let lastId = parseInt(localStorage.getItem("lastId") || "0");
    let newId = lastId + 1;
    localStorage.setItem("lastId", newId.toString());
    
    var a = document.createElement("div");
    a.setAttribute("class", "list-div")
    a.setAttribute("id", `${newId}`);
    a.innerHTML =`<input type="checkbox" id="${"List-" + newId}">
        <label for="${"List-" + newId}">${task}</label>`
    let c = document.getElementById("in-process-list-container");
    c.appendChild(a);
    localStorage.setItem(newId.toString(), task);
};

function loadlist(){
    let lastId = parseInt(localStorage.getItem("lastId") || "0");
    for (let i = 1; i <= lastId; i++) {
        let value = localStorage.getItem(i.toString());
        if (value !== null) {
            var a = document.createElement("div");
            a.setAttribute("class", "list-div");
            a.setAttribute("id", `${i}`);
            a.innerHTML = `<input type="checkbox" id="${"List" + i}">
                <label for="${"List" + i}">${value}</label>`;
            let c = document.getElementById("in-process-list-container");
            c.appendChild(a);
        }
    }
}

let button1 = document.getElementById("Add-list");
button1.addEventListener('click', function () {
    let b = prompt("Enter the TO DO list below: ");
    if (b) {
        addvalue(b);
    }
});

let button2 = document.getElementById("Remove-list");
button2.addEventListener('click', function () {
     let completedListContainer = document.getElementById("completed-list-container");
    while (completedListContainer.firstChild) {
        let removedDiv = completedListContainer.removeChild(completedListContainer.firstChild);
        // Remove the corresponding data from local storage
        localStorage.removeItem(removedDiv.id);
    }
})

document.addEventListener('DOMContentLoaded', function() {
    loadlist();

    let listsContainer = document.getElementById("in-process-list-container");
    listsContainer.addEventListener('change', function(event) {
        if (event.target.type === 'checkbox') {
            console.log('Checkbox ID:', event.target.id, 'Checked:', event.target.checked);
            console.log(event.target.type)
            // You can add any logic you want to execute when a checkbox is checked here.
            // For example, updating the item's status in localStorage or changing the appearance of the item.
            // let childdiv = event.target.closest(`${event.target.id}`)
            if (event.target.checked) {
                // let parentdiv = document.getElementById("in-process-list-container");
                // let childdiv = document.getElementById(event.target.id).parentElement;
                // console.log(childdiv);
                // console.log(parentdiv);
                // // let newDiv = "";
                // // console.log(newDiv);
                // // let removedDiv = childdiv.replaceWith(newDiv);
                // let removedDiv = childdiv.remove();
                // console.log(removedDiv)
                // let completeddiv = document.getElementById('completed-list-container');
                // completeddiv.append(removedDiv);
                 // If the checkbox is checked, move the corresponding div to the completed list container
                let divToMove = document.getElementById(event.target.id.replace("List", ""));
                if (divToMove) {
                    let completedListContainer = document.getElementById("completed-list-container");
                    completedListContainer.appendChild(divToMove);
                }
                let changeid = document.getElementById(event.target.id).parentElement;
                
                // changeid.setAttribute("id", `C${event.target.id}`);
                // localStorage.setItem(`C${event.target.id}`, )
                // localStorage.removeItem()
                
            }
        }
    });

    let completedlistsContainer = document.getElementById("completed-list-container");
    completedlistsContainer.addEventListener('change', function (event) {
        if (!(event.target.checked)) {
            let divToMove = document.getElementById(event.target.id.replace("List", ""));
                if (divToMove) {
                    let completedListContainer = document.getElementById("in-process-list-container");
                    completedListContainer.appendChild(divToMove);
                }
        }
    })
});