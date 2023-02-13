let nome = document.querySelector("#name > td > input");
let Sobrenome = document.querySelector("#Sobrenome > td > input[type=text]");
var idade = document.querySelector("#idade > td > input[type=number]");
let email = document.querySelector("#email > td > input[type=email]");
let senha = document.querySelector("#senha > td > input[type=password]");
let cep = document.querySelector("#cep > td > input[type=number]");
let cpf = document.querySelector("#cpf > td > input[type=number]");
let genero = document.querySelector("#Genero");

function cadastrar() {
    let verifica = new Boolean(false);

    
    if (nome.value.length > 3 & nome.value.length < 50) {
        verifica = true;
        nome.classList.remove("red")
        nome.classList.add("green")
    } else {
        verifica = false;
        nome.classList.remove("green")
        nome.classList.add("red")
    }

    if (Sobrenome.value.length > 3 & Sobrenome.value.length < 50) {
        verifica = true;
        Sobrenome.classList.remove("red")
        Sobrenome.classList.add("green")
    } else {
        verifica = false;
        Sobrenome.classList.remove("green")
        Sobrenome.classList.add("red")
    }

    if (idade.value > 0){
        verifica = true;
        idade.classList.remove("red")
        idade.classList.add("green")
    } else {
        verifica = false;
        idade.classList.remove("green")
        idade.classList.add("red")
    }

    let coletaEmail = email.value;
    if (coletaEmail.indexOf('@') !== -1 && coletaEmail.indexOf('.', coletaEmail.indexOf('@')) !== -1) {
        verifica = true;
        email.classList.remove("red")
        email.classList.add("green")
    } else {
        verifica = false;
        email.classList.remove("green")
        email.classList.add("red")
    }

    if (senha.value.length >= 8 & senha.value.length < 20){
        verifica = true;
        senha.classList.remove("red")
        senha.classList.add("green")
    } else {
        verifica = false;
        senha.classList.remove("green")
        senha.classList.add("red")
    }

    if (cep.value.length <= 9 & cep.value.length > 0){
        verifica = true;
        cep.classList.remove("red")
        cep.classList.add("green")
    } else {
        verifica = false;
        cep.classList.remove("green")
        cep.classList.add("red")
    }

    if (cpf.value.length == 11){
        verifica = true;
        cpf.classList.remove("red")
        cpf.classList.add("green")
    } else {
        verifica = false;
        cpf.classList.remove("green")
        cpf.classList.add("red")
    }

    if (genero.value == 0){
        verifica = false;
        genero.classList.remove("green")
        genero.classList.add("red")
    }
    else{
        verifica = true;
        genero.classList.remove("red")
        genero.classList.add("green")
    }
   


}

function limpa(){
    var limpa = document.getElementById("lista").getElementsByTagName("input");
    for(var i=0;i<limpa.length;i++){
        if (limpa[i].classList.contains("green")) {
            limpa[i].classList.remove("green");
        }
    }
}
