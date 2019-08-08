var listElement = document.querySelector('#app ul'), // List
    inputElement = document.querySelector('#app input'), // Input
    btnElement = document.querySelector('#app button'); // Button

function foco(){
    inputElement.focus();
}

foco();

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
    listElement.innerHTML = null;
    
    for(todo of todos){
        var todoElement = document.createElement('li'),
            todoText = document.createTextNode(todo),
            linkElement = document.createElement('a'),
            linkText = document.createTextNode('Excluir'),
            pos = todos.indexOf(todo);
        
        linkElement.setAttribute('href', '#');
        linkElement.setAttribute('onclick', 'deleteTodo('+pos+')');
        linkElement.appendChild(linkText);
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodos(){
    var todoText = inputElement.value;
    
    todos.push(todoText);
    inputElement.value = null;
    renderTodos();
    saveToStorage()
    foco();
}

btnElement.onclick = addTodos;

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage()
    foco();
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}