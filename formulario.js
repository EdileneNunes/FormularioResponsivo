/*
 */

function validarDados() {
  /* 
  1 Capturar os campos do formulário para validação
  2 Validar campo a campo para garantir o seu preenchimento
  3 Caso todos os campos obrigatórios estejam preenchidos, a função deve retornar true, caso contrário false
  */

  document.getElementById("firstnameValidation").className = "hidden required";
  if (firstname == "") {
    /* 
  document.getElementById: pega um elemento da tela pelo id, onde o id é passado via parâmetro
  className: atribui a um elemento da tela uma classe CSS
  */
    document.getElementById("firstnameValidation").className = "show required";
  }
  document.getElementById("lastnameValidation").className = "hidden required";
  if (lastname == "") {
    document.getElementById("lastnameValidation").className = "show required";
  }

  document.getElementById("emailValidation").className = "hidden required";

  if (number == "") {
    document.getElementById("emailValidation").className = "show required";
  }

  document.getElementById("numberValidation").className = "hidden required";
  if (email == "") {
    document.getElementById("numberValidation").className = "show required";
  }

  document.getElementById("passwordValidation").className = "hidden required";
  if (password == "") {
    document.getElementById("passwordValidation").className = "show required";
  }

  document.getElementById("confirmPasswordValidation").className =
    "hidden required";
  if (confirmPassword == "") {
    document.getElementById("confirmPasswordValidation").className =
      "show required";
  }
}

function cadastrar() {
  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const email = document.getElementById("email").value;
  const number = document.getElementById("number").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  let arrayUser = [];

  let objetoUser = {
    firstname: " ",
    lastname: " ",
    email: " ",
    number: " ",
    password: " ",
  };

  let dadosUsuario = localStorage.getItem("chaveDados", objetoUser);
  arrayUser = JSON.parse(dadosUsuario);

  if (dadosUsuario == null) {
    arrayUser = [];
  }

  objetoUser.firstname = firstname;
  objetoUser.lastname = lastname;
  objetoUser.email = email;
  objetoUser.number = number;
  objetoUser.password = password;

  arrayUser.push(objetoUser);

  localStorage.setItem("chaveDados", JSON.stringify(arrayUser));
}
