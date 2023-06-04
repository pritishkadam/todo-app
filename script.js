const form = document.getElementById('form');
const input = document.getElementById('input');
const todos = document.getElementById('todos');

const storedTodos = JSON.parse(localStorage.getItem("todos"));

if(storedTodos) {
    storedTodos.forEach((todo)=>{
        addTodo(todo);
    })
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    addTodo();
});

function addTodo(element) {
    let todoText = input.value;

    if(element) {
        todoText = element.text;
    }

        if(todoText) {
        const container = document.createElement('div');
        const todoEl = document.createElement('li');
        const deleteEl = document.createElement('button');
        deleteEl.innerText="x";
        deleteEl.type = "button";
        todoEl.innerText = todoText;

        if(element && element.completed) {
            todoEl.classList.add('completed')
        }

        container.classList.add('container');
        deleteEl.classList.add('deleteEl');
        container.appendChild(todoEl);
        container.appendChild(deleteEl);

        todos.appendChild(container);
        input.value = '';
        
        deleteEl.addEventListener('click', (e)=>{
            container.remove();
            updateLocalStorage();
        });
        
        todoEl.addEventListener('click', (e)=>{
            todoEl.classList.toggle('completed');
            updateLocalStorage();
        }); 
        
        updateLocalStorage();
        }
    
}

function updateLocalStorage() {
    const todosEl = document.querySelectorAll('li');

    const todos = [];

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        });
    });

    localStorage.setItem("todos", JSON.stringify(todos));

}
