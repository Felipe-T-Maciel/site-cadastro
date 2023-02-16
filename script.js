let Snome = [];
let Ssobrenome = [];
let Sidade = [];
let Scep = [];
let Scpf = [];
let Sgenero = [];
let Semail = [];
let Ssenha = [];
let Contadorusuario = 0;

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

        if (validarCPF(cpf.value)) {
            cpfV = true;
            cpf.classList.remove("red");
            cpf.classList.add("green");
          } else {
            cpfV = false;
            cpf.classList.remove("green");
            cpf.classList.add("red");
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
            alert('Campos inválidos')
        }
        if(verifica==true){
            Editar(Contadorusuario);
            ImprimiLista()
            alert('User adicionado')
            limpa()
            limpaDeNovo()
        }
    }
}



function Editar(Contadorusuario){
    for(let i=Contadorusuario;i<Contadorusuario.length;i++){
        Snome[i] = nome.value;
        Ssobrenome[i] = Sobrenome.value;
        Sidade[i] = idade.value;
        Scep[i] = cep.value;
        Scpf[i] = cpf.value;
        Sgenero[i] = genero.value;
        Semail[i] = email.value;
        Ssenha[i] = senha.value;
    }
    for(let i=Contadorusuario;i<Contadorusuario.length;i++){
        nome.value = Snome[i];
        cep.value = Scep[i];
        idade.value = Sidade[i];
        email.value = Semail[i];
        senha.value = Ssenha[i];
        Sobrenome.value = Ssobrenome[i];
        genero.value = Sgenero[i];
        cpf.value = Scpf[i];
    }
}




function ImprimiLista() {
    const table = document.createElement('table');
    const tbody = document.createElement('tbody');
    
    const row1 = document.createElement('tr');
    const cell1_1 = document.createElement('td');
    cell1_1.textContent = 'Nome: ';
    const cell1_2 = document.createElement('td');
    cell1_2.textContent = nome.value;
    row1.appendChild(cell1_1);
    row1.appendChild(cell1_2);
    
    const row2 = document.createElement('tr');
    const cell2_1 = document.createElement('td');
    cell2_1.textContent = 'Sobrenome: ';
    const cell2_2 = document.createElement('td');
    cell2_2.textContent = Sobrenome.value;
    row2.appendChild(cell2_1);
    row2.appendChild(cell2_2);
    
    const row3 = document.createElement('tr');
    const cell3_1 = document.createElement('td');
    cell3_1.textContent = 'Idade: ';
    const cell3_2 = document.createElement('td');
    cell3_2.textContent = idade.value;
    row3.appendChild(cell3_1);
    row3.appendChild(cell3_2);
    
    const row4 = document.createElement('tr');
    const cell4_1 = document.createElement('td');
    cell4_1.textContent = 'E-mail: ';
    const cell4_2 = document.createElement('td');
    cell4_2.textContent = email.value;
    row4.appendChild(cell4_1);
    row4.appendChild(cell4_2);
    
    const row5 = document.createElement('tr');
    const cell5_1 = document.createElement('td');
    cell5_1.textContent = 'Senha: ';
    const cell5_2 = document.createElement('td');
    cell5_2.textContent = senha.value.split('').map(() => '*');
    row5.appendChild(cell5_1);
    row5.appendChild(cell5_2);
    
    const row6 = document.createElement('tr');
    const cell6_1 = document.createElement('td');
    cell6_1.textContent = 'CEP: ';
    const cell6_2 = document.createElement('td');
    cell6_2.textContent = cep.value;
    row6.appendChild(cell6_1);
    row6.appendChild(cell6_2);
    
    const row7 = document.createElement('tr');
    const cell7_1 = document.createElement('td');
    cell7_1.textContent = 'CPF: ';
    const cell7_2 = document.createElement('td');
    cell7_2.textContent = cpf.value;
    row7.appendChild(cell7_1);
    row7.appendChild(cell7_2);
    
    const row8 = document.createElement('tr');
    const cell8_1 = document.createElement('td');
    cell8_1.textContent = 'Gênero: ';
    const cell8_2 = document.createElement('td');
    if(genero.value == 1){
        cell8_2.textContent = "Masculino";
    }
    else if(genero.value == 2){
        cell8_2.textContent = "Feminino";

    }
    else if(genero.value == 3){
        cell8_2.textContent = "Outros";

    }
    else if(genero.value == 4){
        cell8_2.textContent = "Não informado";

    }
    row8.appendChild(cell8_1);
    row8.appendChild(cell8_2);

    const row9 = document.createElement('br');
    const cria7_1 = document.createElement('hr');
    const cria7_2 = document.createElement('hr');
    row9.appendChild(cria7_1);
    row9.appendChild(cria7_2);

    const row10 = document.createElement('tr');
    const botao_3 = document.createElement('td');
    const botao_1 = document.createElement('button');
    botao_1.textContent = "Editar"+ Contadorusuario++;
    const botao_2 = document.createElement('td');
    row10.appendChild(botao_2);
    row10.appendChild(botao_1);
    row10.appendChild(botao_3);
    
    tbody.appendChild(row1);
    tbody.appendChild(row2);
    tbody.appendChild(row3);
    tbody.appendChild(row4);
    tbody.appendChild(row5);
    tbody.appendChild(row6);
    tbody.appendChild(row7);
    tbody.appendChild(row8);
    tbody.appendChild(row9);
    tbody.appendChild(row10);
    
    table.appendChild(tbody);
    
    document.body.appendChild(table);
}


function limpa(){

    nome.value = "";
    cep.value = "";
    idade.value = "";
    email.value = "";
    senha.value = "";
    Sobrenome.value = "";
    genero.value = 0;
    cpf.value = "";
}

function limpaDeNovo(){

    const input = document.getElementsByTagName("input");
    const select = document.getElementsByTagName("select");

    for(let i=0;i<input.length;i++){
        var remove = input[i];
        remove.classList.remove("green");
    }
    for(let i=0;i<input.length;i++){
        var removerSelect = select[i];
        removerSelect.classList.remove("green");
    }


}



//Pego da net, sorry teacher
function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
  
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
      return false;
    }
  
    let soma = 0;
    let resto;
  
    for (let i = 1; i <= 9; i++) {
      soma += parseInt(cpf[i - 1]) * (11 - i);
    }
  
    resto = (soma * 10) % 11;
  
    if (resto === 10 || resto === 11) {
      resto = 0;
    }
  
    if (resto !== parseInt(cpf[9])) {
      return false;
    }
  
    soma = 0;
  
    for (let i = 1; i <= 10; i++) {
      soma += parseInt(cpf[i - 1]) * (12 - i);
    }
  
    resto = (soma * 10) % 11;
  
    if (resto === 10 || resto === 11) {
      resto = 0;
    }
  
    if (resto !== parseInt(cpf[10])) {
      return false;
    }
  
    return true;
}
