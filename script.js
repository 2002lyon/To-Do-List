const title = document.querySelector('.title__input');
const description = document.querySelector('.desc__input');
const submitBtn = document.querySelector('.submit');
const toDoList = document.querySelector('#box');

submitBtn.addEventListener('click', function(e) {
    e.preventDefault();

    const titleValue = title.value;
    const descValue = description.value;
    // console.log(descValue);

    if (titleValue === "" || descValue === ""){
        alert("Value Rakha Sathi");
        return
    }
    else{
        let li = document.createElement('li');
        const listItem = document.createTextNode(`${titleValue}: ${descValue}`);
        li.appendChild(listItem);
        // li.textContent = `${titleValue}: ${descValue} `;

        let remove = document.createElement('button');
        remove.textContent = 'Delete';
        // remove.href = "javascript:void(0)";
        remove.className = "remove";
        li.appendChild(remove);

        let pos = toDoList.firstElementChild;
        // console.log(pos)

        if (pos === null){
            box.appendChild(li);
        }
        else{
            box.insertBefore(li, pos);

        }
    }

    title.value = "";
    description.value = "";

    // console.log(remove);

});

// checking for existing data
if (localStorage.getItem('saveTask')) {
    toDoList.innerHTML = localStorage.getItem('saveTask');
};

// saving data in local storage 
function setLocalStorage() {
    localStorage.setItem('saveTask', toDoList.innerHTML);
};

submitBtn.addEventListener('click', (e) => {
    setLocalStorage();
});


// deleting the item
toDoList.addEventListener('click', (e) => {
    
    if (e.target.nodeName === 'BUTTON') {
        // console.log(e.target.parentNode);
        const list = e.target.parentNode;
        toDoList.removeChild(list);
        console.log("true");
    }
    
});

// saving changes
toDoList.addEventListener('click', (e) => {
    setLocalStorage();
    // console.log("check");
});

