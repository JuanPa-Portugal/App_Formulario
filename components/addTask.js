import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";
import { displayTasks } from "./readTasks.js";

export const addTask = (event) => {
  event.preventDefault();
  const list = document.querySelector("[data-list]");
  const inputForm = document.querySelector("[data-form-input]");
  const calendar = document.querySelector("[data-form-date]");
  const value = inputForm.value; //guardamos en value y date el contenido de sus imputs
  const date = calendar.value;
  const dateFormat = moment(date).format("DD/MM/YYYY");//moment es una libreria externa que nos permite manipular la fecha dia y año

if (value ===""|| date ===""){
    return;
}

  inputForm.value = "";
  calendar.value = "";

  const complete = false;

  const taskObject = {
    value,
    dateFormat,
    complete,
    id: uuid.v4()

  };
  list.innerHTML = "";

  //json.parse invierte el json.stringify
  const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
  taskList.push(taskObject);
  localStorage.setItem("tasks", JSON.stringify(taskList));

 displayTasks();
};

export const createTask = ({ value, dateFormat, complete, id }) => {
  /* creando li, div, span */
  const task = document.createElement("li"); 
  task.classList.add("card");

  const taskContent = document.createElement("div");

  const check = checkComplete(id)

  if(complete){
    check.classList.toggle("fas");
    check.classList.toggle("completeIcon");
    check.classList.toggle("far");
  }
  const titleTask = document.createElement("span");
  titleTask.classList.add("task");
  titleTask.innerText = value;
  taskContent.appendChild(check);
  taskContent.appendChild(titleTask);

  const dateElement = document.createElement("span");
  //adhiriendo classes mediante .classlist.add()
  dateElement.innerHTML = dateFormat;
  //agregando un child al parent con .appendchild
  task.appendChild(taskContent);
  task.appendChild(dateElement);
  task.appendChild(deleteIcon(id));
  return task;
};

//datos a tener en cuenta
//sessionStorage.setItem alamacena en la web los datos ingresados por el usuario mientras la pestaña no sea cerrada

/* sessionStorage.setItem("tasks", JSON.stringify( taskObject)) */

//localStorage.setItem almacena los datos y persiste sin imoportar si se cierra el navegardor o la pestaña
