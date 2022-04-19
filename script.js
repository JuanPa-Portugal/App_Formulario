const btnAgregar = document.querySelector("[data-form-btn]");

const createTask = (e) => {
    e.preventDefault();
    //inputForm guarda el input -->caja de escritura a traves del data-...input
    const inputForm = document.querySelector("[data-form-input]")
    const value = inputForm.value; // guarda el contenido del input
    const list = document.querySelector("[data-list]")

    const task = document.createElement("li"); //;creando un li lista en  task
    task.classList.add("card");//agrega una clase mediante ".classlist.add"
    inputForm.value = "";

    //creando contenido html mediante backsticks
    const content = ` <div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span>
  </div>
  <i class="fas fa-trash-alt trashIcon icon"></i>`
    console.log(content);   
    task.innerHTML = content; //se agrega al li que esta guardado en la consante task, contenido html mediante ".innerHTML"
    /* agregando un child con .appendchild */
    list.appendChild(task)
}

btnAgregar.addEventListener("click", createTask);
