import { addTask } from "./components/addTask.js";
import { displayTasks } from "./components/readTasks.js";
const btnAgregar = document.querySelector("[data-form-btn]");

btnAgregar.addEventListener("click", addTask);
displayTasks();

/*  (()=>{
 }) inmediately invoked function expression IIFE
se usa para proteger nuestro codigo y no sea accecible desde consola al usuario  se envuelve todo el script en la function arrow*/
