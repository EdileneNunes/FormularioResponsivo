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
  document.getElementsByName('gender')
    .forEach(function(item)
     {
         if(item.checked == true)
         {
            iSchecked = item.checked;
         }
      });

    if(!iSchecked){
      document.getElementById("genero").className =
      "show required";
    }
}

function validarDados(objetoUser){
      return (objetoUser.firstname !== "" 
      && objetoUser.lastname !== "" 
      && objetoUser.email !== "" 
      && objetoUser.number !== "" 
      && objetoUser.password !== "");
        
}

function cadastrar() {
  debugger;
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
  document.getElementsByName('gender')
    .forEach(function(item)
     {
         if(item.checked == true)
         {
            switch(item.id){
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
  
  let arrayUser = [];

  let objetoUser = {
    firstname: " ",
    lastname: " ",
    email: " ",
    number: " ",
    password: " ",
    female: "",
    male: "",
    outros:"",
    none:"",
    
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
  objetoUser.female= female;
  objetoUser.male= male;
  objetoUser.outros = outros;
  objetoUser.none = none;

  if(validarDados(objetoUser)){
    arrayUser.push(objetoUser);
    localStorage.setItem("chaveDados", JSON.stringify(arrayUser));
  }
}
