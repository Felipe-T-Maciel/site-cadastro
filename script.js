var nome = document.querySelector("#name > td > input");
let Sobrenome = document.querySelector("#Sobrenome > td > input[type=text]");
var idade = document.querySelector("#idade > td > input[type=number]");
let email = document.querySelector("#email > td > input[type=email]");
let senha = document.querySelector("#senha > td > input[type=password]");
let cep = document.querySelector("#cep > td > input[type=number]");
let cpf = document.querySelector("#cpf > td > input[type=number]");
let genero = document.querySelector("#Genero");

let verifica = new Boolean(false);

if(verifica!=true){
    function cadastrar() {
        let NomeV = new Boolean(false);
        let sobrenomeV = new Boolean(false);
        let idadeV = new Boolean(false);
        let cepV = new Boolean(false);
        let cpfV = new Boolean(false);
        let generoV = new Boolean(false);
        let emailV = new Boolean(false);
        let senhaV = new Boolean(false);

        if (nome.value.length > 3 & nome.value.length < 50) {
            NomeV = true;
            nome.classList.remove("red")
            nome.classList.add("green")
        } else {
            NomeV = false;
            nome.classList.remove("green")
            nome.classList.add("red")
        }

        if (Sobrenome.value.length > 3 & Sobrenome.value.length < 50) {
            sobrenomeV = true;
            Sobrenome.classList.remove("red")
            Sobrenome.classList.add("green")
        } else {
            sobrenomeV = false;
            Sobrenome.classList.remove("green")
            Sobrenome.classList.add("red")
        }

        if (idade.value > 0){
            idadeV = true;
            idade.classList.remove("red")
            idade.classList.add("green")
        } else {
            idadeV = false;
            idade.classList.remove("green")
            idade.classList.add("red")
        }

        let coletaEmail = email.value;
        if (coletaEmail.indexOf('@') !== -1 && coletaEmail.indexOf('.', coletaEmail.indexOf('@')) !== -1) {
            emailV = true;
            email.classList.remove("red")
            email.classList.add("green")
        } else {
            emailV = false;
            email.classList.remove("green")
            email.classList.add("red")
        }

        if (senha.value.length >= 8 & senha.value.length < 20){
            senhaV = true;
            senha.classList.remove("red")
            senha.classList.add("green")
        } else {
            senhaV = false;
            senha.classList.remove("green")
            senha.classList.add("red")
        }

        if (cep.value.length <= 9 & cep.value.length > 0){
            cepV = true;
            cep.classList.remove("red")
            cep.classList.add("green")
        } else {
            cepV = false;
            cep.classList.remove("green")
            cep.classList.add("red")
        }

        if (cpf.value.length == 11){
            cpfV = true;
            cpf.classList.remove("red")
            cpf.classList.add("green")
        } else {
            cpfV = false;
            cpf.classList.remove("green")
            cpf.classList.add("red")
        }

        if (genero.value == 0){
            generoV = false;
            genero.classList.remove("green")
            genero.classList.add("red")
        }
        else{
            generoV = true;
            genero.classList.remove("red")
            genero.classList.add("green")
        }

        if(NomeV == true & sobrenomeV == true & idadeV ==true & senhaV == true & emailV == true & cepV == true & cpfV == true & generoV== true){
            verifica = true;
        } else{
            verifica = false;
        }
        if(verifica==true){
            tabela()
        }
    }
}

function limpa(){
    var limpa = document.getElementById("lista").getElementsByTagName("input");
    for(var i=0;i<limpa.length;i++){
        if (limpa[i].classList.contains("green")) {
            limpa[i].classList.remove("green");
        }
        limpa[i] = null;
    }
}

function tabela(){

    var tabela = document.querySelector('tbody')

        var linhaNova = document.createElement('tr')
       
        var nome = document.querySelector("#name > td > input[type=text]");
       
        var texto = document.createTextNode(nome.value)
       
        var elemento = document.createElement('td')
       
        elemento.appendChild(texto)
        linhaNova.appendChild(elemento)
        tabelas.appendChild(linhaNova)
}
