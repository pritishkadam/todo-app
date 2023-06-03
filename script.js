const form = document.getElementById('form');
const input = document.getElementById('input');
const todos = document.getElementById('todos');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const todo = input.value;
    if(todo) {
        const container = document.createElement('div');
        const todoEl = document.createElement('li');
        const deleteEl = document.createElement('button');
        deleteEl.innerText="x";
        deleteEl.type = "button";
        todoEl.innerText = todo;
        container.classList.add('container');
        deleteEl.classList.add('deleteEl');
        container.appendChild(todoEl);
        container.appendChild(deleteEl);

        todos.appendChild(container);
        input.value = '';

        deleteEl.addEventListener('click', (e)=>{
            container.remove();
        });

        todoEl.addEventListener('click', (e)=>{
            todoEl.classList.toggle('todoDone');
        });



        // todoEl.appendChild(deleteEl);
        
    }
});


