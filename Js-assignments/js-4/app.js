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
