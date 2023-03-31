/*
 */
function validarCampos() {
  /* 
  1 Capturar os campos do formulário para validação
  2 Validar campo a campo para garantir o seu preenchimento
  3 Caso todos os campos obrigatórios estejam preenchidos, a função deve retornar true, caso contrário false
  */
  document.getElementById("firstnameValidation").className = "hidden required";
  if (firstname.value == "") {
    /* 
  document.getElementById: pega um elemento da tela pelo id, onde o id é passado via parâmetro
  className: atribui a um elemento da tela uma classe CSS
  */
    document.getElementById("firstnameValidation").className = "show required";
  }
  document.getElementById("lastnameValidation").className = "hidden required";
  if (lastname.value == "") {
    document.getElementById("lastnameValidation").className = "show required";
  }

  document.getElementById("emailValidation").className = "hidden required";

  if (number.value == "") {
    document.getElementById("emailValidation").className = "show required";
  }

  document.getElementById("numberValidation").className = "hidden required";
  if (email.value == "") {
    document.getElementById("numberValidation").className = "show required";
  }

  document.getElementById("passwordValidation").className = "hidden required";
  if (password.value == "") {
    document.getElementById("passwordValidation").className = "show required";
  }

  document.getElementById("confirmPasswordValidation").className =
    "hidden required";
  if (confirmPassword.value == "") {
    document.getElementById("confirmPasswordValidation").className =
      "show required";
  }
  //Inicia false, se em algum momento no forEach for true é por que uma opçaõ do radio button foi preenchida.
  var iSchecked = false;
  document.getElementsByName("gender").forEach(function (item) {
    if (item.checked == true) {
      iSchecked = item.checked;
    }
  });

  if (!iSchecked) {
    document.getElementById("genero").className = "show required";
  }
}

function validarDados(objetoUser) {
  return (
    objetoUser.firstname !== "" &&
    objetoUser.lastname !== "" &&
    objetoUser.email !== "" &&
    objetoUser.number !== "" &&
    objetoUser.password !== ""
  );
}

function validarEmail(email) {
  debugger;
  // Pega os dados do LocalStorage (estes dados são retornados em formato String)
  dadosUsuario = localStorage.getItem("chaveDados");
  
  // Converte os dados do formato string para um objeto
  var arrDadosUsuario = JSON.parse(dadosUsuario);

  if (dadosUsuario == null) {
    arrDadosUsuario = [];
  }

  for (i = 0; i < arrDadosUsuario.length; i++) {
    let emailLocalStorage = arrDadosUsuario[i].email;
    if (emailLocalStorage == email) {
      document.getElementById("emailJaCadastrado").className = "show required";
      return false;
    } else {
      document.getElementById("emailJaCadastrado").className =
        "hidden required";
    }

  }
  return true;
}

function emailJaCadastrado(email, listaDeUsuarios) {
  for (let i = 0; i < listaDeUsuarios.length; i++) {
    if (listaDeUsuarios[i].email === email) {
      return true;
    }
  }
  return false;
}

function cadastrar() {
  // Pega os elementos do html e armazena em uma variável
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var email = document.getElementById("email").value;
  var number = document.getElementById("number").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  var female = false;
  var male = false;
  var outros = false;
  var none = false;

  // Pega todos os elementos da tela que contém o nome(name) gender (no html)
  var listaDeGeneros = document.getElementsByName("gender");

  listaDeGeneros.forEach(function (radio) {
    if (radio.checked) {
      switch (radio.id) {
        case "female":
          female = true;
          break;
        case "male":
          male = true;
          break;
        case "outros":
          outros = true;
          break;
        case "none":
          none = true;
          break;
      }
    }
  });

  validarCampos();
 // validarEmail(email);
  /*if(validarEmail(email) == false){

    
  }*/

  let arrayUser = [];
  let objetoUser = {
    firstname: " ",
    lastname: " ",
    email: " ",
    number: " ",
    password: " ",
    female: "",
    male: "",
    outros: "",
    none: "",
  };

  let dadosUsuario = localStorage.getItem("chaveDados");
  arrayUser = JSON.parse(dadosUsuario);

  if (dadosUsuario == null) {
    arrayUser = [];
  }

  objetoUser.firstname = firstname;
  objetoUser.lastname = lastname;
  objetoUser.email = email;
  objetoUser.number = number;
  objetoUser.password = password;
  objetoUser.female = female;
  objetoUser.male = male;
  objetoUser.outros = outros;
  objetoUser.none = none;

  if (validarDados(objetoUser)) {
    arrayUser.push(objetoUser);
    localStorage.setItem("chaveDados", JSON.stringify(arrayUser));
  }
}

/* Regras para validação de cadastro duplicado:
1- Buscar todos os usuários no LocalStorage
2- Percorrer cada item da lista de usuários comparando se o email a ser cadastrado está contido na lista.(usar um for)
3- Caso seja localizado um email igual ao que está sendo cadastrado, mostrar mensagem para o usuário. ( Email já está cadastrado)

Criar uma função para atenedr as regras acima.
Essa função deve receber um parâmetro que é o email (este parâmetro servirá para comparação do email (variável email))
A função deve ser responsável por mostrar ou esconder a mensagem ao usuário ( Email já está cadastrado)
A função após as validações deve retorar verdadeiro ou falso (para dizer se o cadastro pode ou não ser construido)

*/
