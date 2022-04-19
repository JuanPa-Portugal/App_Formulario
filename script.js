const btnAgregar = document.querySelector("[data-form-btn]");

const createTask = (e) => {
    e.preventDefault();
    const inputForm = document.querySelector("[data-form-input]")
    console.log(inputForm.value);   
}

btnAgregar.addEventListener("click", createTask);
