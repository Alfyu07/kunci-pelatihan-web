//get important elements

const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const clearButton = document.querySelector(".footer button");


inputBox.onkeyup = (event)=>{
    let userData = inputBox.value;
    if(userData.length != 0){
        addBtn.classList.add("active");
    }else{
        addBtn.classList.remove("active");
    }
    //menambah event tambah ketika menekan enter
    if(event.keyCode == 13){
        addItem();
        showTask();
    }
}

showTask();

addBtn.onclick = () =>{
    addItem();
    showTask();
}

clearButton.onclick = () =>{
    clearAll();
    showTask();
}

function addItem(){
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem("todo");
    if(getLocalStorage == null){
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push(userData);
    localStorage.setItem("todo", JSON.stringify(listArr));
}

function showTask(){
    let getLocalStorage = localStorage.getItem("todo");
    if(getLocalStorage == null){
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalStorage);
    }

    
    const pendingNumber = document.querySelector('.pendingNumber');
    pendingNumber.textContent = listArr.length;
    
    if(listArr.length != 0){
        clearButton.classList.add("active");
    }else{
        clearButton.classList.remove("active");

    }

    let newLiTag = '';

    listArr.forEach((element, index) => {
        newLiTag += `<li >${element} <span onclick="deleteTask(${index})";><i class="fas fa-trash"></i></span></li>`;
    });
    todoList.innerHTML=newLiTag;
    inputBox.value='';
}

function deleteTask(index){
    let getLocalStorage = localStorage.getItem("todo");
    listArr = JSON.parse(getLocalStorage);

    listArr.splice(index, 1);
    localStorage.setItem("todo", JSON.stringify(listArr));
    showTask();
}

function clearAll(){
    listArr = [];
    localStorage.setItem("todo", JSON.stringify(listArr));
}
