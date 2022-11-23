const todoInput = document.querySelector('#todoIn');
const todoList = document.querySelector('#list-items');
var todos = [];
let saveId;
//const text = document.getElementById("todoIn");
const addTaskButton = document.getElementById("submit");
const saveTaskButton = document.getElementById("save");
const listBox = document.getElementById("input");

document.querySelector('#submit').addEventListener('click', (event) =>{
    event.preventDefault();
    addTodo(todoInput.value);
    console.log("added");
});

const addTodo = (item) =>{
    if(item !== ''){
        let todo = {
            id: Date.now(),
            name: item,
            completed: false
            }

    console.log(typeof(todo) + " -> type of todo" + "\nContent of Todo => " + todo.id +"\t" + todo.name + "\t" + todo.completed);
    todos.push(todo);    // pushing the item to the list
    updateLocalStorage(todos);
    displayTodo(todos); //Display the list
    todoInput.value=''; //clear the input field
    }
    else {
        console.log('Cannot Enter empty value');
        return;
    }
}

const displayTodo = (todos) =>{
    console.log("Entered displayTodo() " +typeof(todos) + " -> type of todos[]")
    todoList.innerHTML = '';
    todos.forEach((item)=> {
        const checker = item.completed ? 'checked' : null;
        const li = document.createElement('li');
        li.setAttribute('class','item');
        li.setAttribute('data-key', item.id);
        if(checker != null){
            li.classList.add('checked');
        }

        li.innerHTML = `<input type="checkbox" class="checkbox" ${checker}>
                        ${item.name}
                        <button class="edit-button">✏️</button>
                        <button class="delete-button">X</button>`;
        todoList.append(li);
    });
}



const updateLocalStorage = (todos) =>{
    localStorage.setItem('todos',JSON.stringify(todos));
   //localStorage.setItem('todos',todos + stringify(todos));
}

//Get data from the browser local storage.
const getFromLocalStorage = () =>{
    let thing = localStorage.getItem('todos');
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
    let tempsaveId = event.target.parentElement.getAttribute('data-key');
    saveId = tempsaveId;
    console.log("SaveId => " + saveId);
    edit(event.target.parentElement,event.target.parentElement.childNodes[1].textContent.trim());
   // edit(event.target.parentElement, event.target.parentElement.find('input').value);
 } 
});

const checkOff = (id) =>{
    todos.forEach((item) =>{
        if (item.id == id) {
      item.completed = !item.completed; //sets the completed value to the opposite (true/false)
    }});
    updateLocalStorage(todos);
}

const deleteTodo = (id) => {
     todos = todos.filter((item) =>{
    return item.id != id;
  });
  updateLocalStorage(todos);
  displayTodo(todos);
}

// differnet Approach ->  turns the main Text Input to the editing area
 const edit = ((domElment, value)  => {
    console.log(domElment);
        todoInput.value = value;
        console.log(value);
        addTaskButton.style.display = "none";
        saveTaskButton.style.display = "block"; 
});

//Afteer editing the task - Save button
saveTaskButton.addEventListener("click", (event) => {
    console.log("Event => " + event); 
    //console.log('exec save function, Value of item is ' + event.target.parentElement.innerHTML);
    //console.log("SaveId = " + saveId + "\n The id of the parent Element is =>" + event.target.parentElement.id );
    event.target.parentElement.name = todoInput.value;
     if((event.target.parentElement.name !== '')){
        //objIndex = todos.find((obj => obj.id == ));
       // console.log("ObjIndex =>" + objIndex);
       console.log("SaveId =>" + saveId);
        let todo = {
            id: saveId ,//document.querySelector(`li`).getAttribute('data-key') ,
            name: event.target.parentElement.name,
            completed: false
           }
        //todos.push(todo);

        //creates a copy of the main todos array
   // let todosCopy = JSON.parse(JSON.stringify(todos));
   // let found = todosCopy.find(s => s.id===todo.id);
   let found = todos.find(s => s.id==todo.id);
    if (found) {
        Object.assign(found, todo);
    } else {
        todos.push(todo);
        console.log("Pushed the new content inside the array");
    }

    //todos = todosCopy;
    updateLocalStorage(todos);
    displayTodo(todos);

    //Display the contentss of the new array
    console.log("The new modified array is => ");
    todos.forEach((item) => {
        console.log(JSON.stringify(item) + " ");
    });

    console.log("Displaying SingleOBJ => "+ JSON.stringify(todo));
    //todos = todoscopy      
    }

    addTaskButton.style.display = "block";
    saveTaskButton.style.display = "none";
    todoInput.value = '';
});
