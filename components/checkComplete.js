const checkComplete = (id) => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", (event) =>CompleteTask(event, id));
    return i;
  };

  //funcion para animar el chek de la lista
  //togle hace que quite o ponga una clase
  const CompleteTask = (event, id) => {
    const element = event.target; // target es una propiedad de event y selecciona el elemento clikeado
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
    const tasks = JSON.parse(localStorage.getItem("tasks"))
    const index = tasks.findIndex((item)=> item.id===id);
    tasks[index]['complete'] = !tasks[index]['complete']
    localStorage.setItem("tasks",JSON.stringify(tasks))
  };

  export default checkComplete;