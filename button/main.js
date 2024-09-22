//creacion de funcion flecha
const saludar = () => {
  alert("Hola bienvenido a este cuatrimestre");
};
//creacion de alerta moderna con sweet alert2
const saludarNuevo = () => {
  Swal.fire({
    title: "Error!",
    text: "Do you want to continue",
    icon: "error",
    confirmButtonText: "Cool",
  });
};
const saludarNew = () => {
  Swal.fire({
    title: "The Internet?",
    text: "That thing is still around?",
    icon: "question",
  });
};
