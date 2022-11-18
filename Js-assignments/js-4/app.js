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
    editTodo(event.target.parentElement.getAttribute('data-key'));
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
          const li = document.getElementById(item.id);
          li.innerHTML = `<input type="text" calss="checkbox" value="${item.name} id="${id}">
          <button class="okay-button">✔️</button>`;
          todoList.addEventListener('click', function(event) {
            if (event.target.classList.contains('okay-button')) {
            displayTodo();
  }               
          });
        }
    })
}