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

  export default checkComplete;