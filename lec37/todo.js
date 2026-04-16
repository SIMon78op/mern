const addBtn = document.querySelector(".add-btn");
const todoItemsSection = document.querySelector("#todo-items");

addBtn.addEventListener("click", (e) => {
    e.preventDefault();

const todoElement = document.querySelector("#todo");
const todoItem = document.createElement("div");
todoItem.className = "todo-item";
todoItem.innerHTML =`<p>${todoElement.value}</p>
                            <div class="todo-buttons">
                            <button id="edit-btn">Edit</button>
                            <button id="delete-btn">Delete</button>
                            </div>`;
     todoItemsSection.appendChild(todoItem);
     todoElement.value = "";
 });