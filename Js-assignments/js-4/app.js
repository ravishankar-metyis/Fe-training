const todoInput = document.querySelector('#todoIn');
const todoList = document.querySelector('#list-items');
let todos = [];

document.querySelector('#submit').addEventListener('click', (event) =>{
    event.preventDefault();
    addTodo(todoInput.value);
    console.log("added");
});

const addTodo = (item) =>{
    if(item !== ''){
        const todo = {
            id: Date.now(),
            name: item,
            completed: false
            };

    todos.push(todo);    // pushing the item to the list
    addToLocalStorage(todos);
    displayTodo(todos); //Display the list
    todoInput.value=''; //clear the input field
    }
}

const displayTodo =() =>{
    todoList.innerHTML = '';
    todos.forEach((item)=> {
        const checker = item.completed ? 'checked' : null;
        const li = document.createElement('li');
        li.setAttribute('class','item');
        li.setAttribute('data-key', item.id);
        if(checker != null){
            li.classList.add('checked');
        }

        li.innerHTML = `<input type="checkbox" calss="checkbox" ${checker}>
                        ${item.name}
                        <button class="edit-button">✏️</button>
                        <button class="delete-button">X</button>`;
        todoList.append(li);
    });
}

const addToLocalStorage = (todos) =>{
    localStorage.setItem('todos',JSON.stringify(todos));
    displayTodo(todos);
}

const getFromLocalStorage = () =>{
    const thing = localStorage.getItem('todos');
    if (thing){
        todos = JSON.parse(thing);
        displayTodo(todos);
    }
}
getFromLocalStorage();


// Check off, Edit & Delete Functionality


todoList.addEventListener('click', function(event) {
    if (event.target.type === 'checkbox') {
        checkOff(event.target.parentElement.getAttribute('data-key'));
  }
  if (event.target.classList.contains('delete-button')) {
    deleteTodo(event.target.parentElement.getAttribute('data-key'));
  }
  if (event.target.classList.contains('edit-button')) {
    edit(event.target.parentElement.getAttribute('data-key'));
  }
});

const checkOff = (id) =>{
    todos.forEach((item) =>{
        if (item.id == id) {
      item.completed = !item.completed; //sets the completed value to the opposite (true/false)
    }});
    addToLocalStorage(todos);
}

const deleteTodo = (id) => {
     todos = todos.filter((item) =>{
    return item.id != id;
  });
  addToLocalStorage(todos);
}


 const editTodo = (id) =>{
    todos.forEach((item) =>{
        if (item.id == id) {
        let itemInput = document.createElement('input');
        itemInput.innerHTML = `<input type="text" id="${id}">`;
        console.log('checklst changed to input field')
        let buttonInput = document.createElement('button');
        buttonInput.innerHTML = `<button class="okay-button">✔️</button>`;
        itemInput.type = 'text';
        itemInput.value = item.name;
        itemInput.classList.add('edit');    
        buttonInput.addEventListener('click', saveItem);
         /* let editText = null;
          editText = document.getElementById(id);
          editText.innerHTML = `<input type="text" calss="" value="${item.name} id="${id}">
          <button class="okay-button">✔️</button>`; 
          console.log(editText.innerHTML);
          todoList.append(editText.innerHTML);*/
          todoList.addEventListener('click', function(event) {
            if (event.target.classList.contains('okay-button')) {
            //displayTodo();
            console.log('okay buttton')
            addToLocalStorage();
                }});
        }
    })
}


const editTo0o = (event) =>{
    let item = event.target.innerHTML;
    let itemInput = document.createElement('input');
    itemInput.type = 'text';
    itemInput.value = item;
    itemInput.classList.add('edit');
    itemInput.addEventListener('keypress', saveItem);
    itemInput.addEventListener('click', saveItem);
    event.target.parentNode.prepend(itemInput);
    event.target.remove();
    itemInput.select();
}

const saveItem = (event) =>{
    let inputValue = event.target.value;
    if(event.target.value.length > 0 && (event.keyCode === 13 || event.type === 'clcik')){
        let li = document.createElement('li');
        li.addEventListener('click',editItem);
        li.textContent = inputValue;
        event.target.parentNode.prepend(li);
        event.target.remove();
    }
}



// differnet Approach ->  turns the main Text Input to the editing area
const text = document.getElementById("todoIn");
const addTaskButton = document.getElementById("submit");
const saveTaskButton = document.getElementById("save");
const listBox = document.getElementById("input");
const saveInd = document.getElementById("saveIndex");

const edit = (ind) => {
    saveInd.value = ind;
    let todo = localStorage.getItem("todos");
    todos = JSON.parse(todo);
    text.value = todos[ind];
    addTaskButton.style.display = "none";
    saveTaskButton.style.display = "block";
}

//Afteer editing the task - Save button
saveTaskButton.addEventListener("click", () => {
 let tod = localStorage.getItem("todos");
 todos = JSON.parse(tod);
 let id = saveInd.value;
 todos[id] = text.value;
 addTaskButton.style.display = "block";
 saveTaskButton.style.display = "none";
 text.value = "";
 localStorage.setItem("todos", JSON.stringify(todos));
 displayTodo();
});