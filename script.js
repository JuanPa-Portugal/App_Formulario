(() => {
  // inmediately invoked function expression IIFE

  const btnAgregar = document.querySelector("[data-form-btn]");

  const createTask = (e) => {
    e.preventDefault();
    //inputForm guarda el input -->caja de escritura a traves del data-...input
    const inputForm = document.querySelector("[data-form-input]");
    const value = inputForm.value; // guarda el contenido del input
    const list = document.querySelector("[data-list]");
    inputForm.value = "";

    //creando li, div, span
    const task = document.createElement("li"); //;
    const taskContent = document.createElement("div");
    const titleTask = document.createElement("span");

    //adhiriendo classes mediante .classlist.add()
    task.classList.add("card");
    titleTask.innerText = value;
    titleTask.classList.add("task");
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);

    //agregando un child al parent
    task.appendChild(taskContent);
    list.appendChild(task);
    const content = ` 
  
  <i class="fas fa-trash-alt trashIcon icon"></i>`;
    //task.innerHTML = content; //se agrega al li que esta guardado en la consante task, contenido html mediante ".innerHTML"
    /* agregando un child con .appendchild */
  };

  btnAgregar.addEventListener("click", createTask);

  const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", CompleteTask);
    return i;
  };

  //funcion para animar el chek de la lista
  //togle hace que quite o ponga una clase
  const CompleteTask = (event) => {
    const element = event.target; // target es una propiedad de event y selecciona el elemento clikeado
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
  };
})(); // inmediately invoked function expression IIFE
//se usa para proteger nuestro codigo y no sea accecible desde consola al usuario
