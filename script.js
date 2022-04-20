import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

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

    //agregando un child al parent con .appendchild
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    task.appendChild(taskContent);
    list.appendChild(task);
    task.appendChild(deleteIcon());
  };

  btnAgregar.addEventListener("click", createTask);

/*  (()=>{
 }) inmediately invoked function expression IIFE
se usa para proteger nuestro codigo y no sea accecible desde consola al usuario  se envuelve todo el script en la function arrow*/
