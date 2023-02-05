let link = 'http://localhost:8080/todo';
let contentType = 'application/json; charset=utf-8';

async function createTodo(todoData) {
    let response =  await fetch(link, {
        method: 'POST',
        body: JSON.stringify(todoData),
        headers: {'Content-Type': contentType},
    });
    if (response.ok) {
        let resp = await response.json();
        todoViewCreate(resp.id, resp.title, resp.body, resp.completed);
        document.getElementById("form").reset();
    }
}

 async function todoRemove(todoId) {
    let response = await fetch(link + '/' + todoId, {
        method: 'DELETE',
        headers: {'Content-Type': contentType},
    });
    if (response.ok) {
        document.querySelector(`[data-id="${todoId}"]`).remove();
    }
}

async function todoUpdate(todoId) {
    let todoData = {
        completed: document.querySelector(`[data-id="${todoId}"]` + ' input[type="checkbox"]').checked
    }
    let response = await fetch(link + '/' + todoId, {
        method: 'PATCH',
        body: JSON.stringify(todoData),
        headers: {'Content-Type': contentType},
    });
}

let submit = document.getElementById("submit");
submit.onclick = () => {return false};
submit.addEventListener("click", () => {
    let todoData = {
        title: document.getElementById("title").value,
        body: document.getElementById("body").value,
        completed: document.getElementById("completed").checked,
    };
    if (todoData.title == '' || todoData.body == '') {
        return alert("Please fill in TODO name and Description")
        }
    else {
        createTodo(todoData);
        }
});

function todoViewCreate(todoId, title, body, completed) {
    let todo = document.createElement("div");
    todo.classList.add("todo");
    todo.dataset.id = todoId;

    let content = document.getElementById("content");
    content.appendChild(todo);

    let titleTodo = document.createElement("h2");
    titleTodo.innerText = title;
    titleTodo.classList.add("title");
    todo.appendChild(titleTodo);

    let bodyTodo = document.createElement("div");
    bodyTodo.innerText = body;
    bodyTodo.classList.add("body");
    todo.appendChild(bodyTodo);

    let completedTodo = document.createElement("div");
    completedTodo.classList.add("completed");
    todo.appendChild(completedTodo);

    let labelTodo = document.createElement("label");
    labelTodo.innerText = "Is completed";
    completedTodo.appendChild(labelTodo);

    let checkboxTodo = document.createElement("input");
    checkboxTodo.type = "checkbox";
    checkboxTodo.checked = completed;
    checkboxTodo.addEventListener("click", () => {todoUpdate(todoId)});
    labelTodo.appendChild(checkboxTodo);

    let deleteTodo = document.createElement("button");
    deleteTodo.classList.add("delete");
    deleteTodo.innerText = '✘';
    deleteTodo.addEventListener("click", () => {todoRemove(todoId)});
    todo.appendChild(deleteTodo);
}