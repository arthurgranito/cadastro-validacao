const form = document.getElementById('form');
const nomeUsuario = document.getElementById('nome-usuario');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const confirmarSenha = document.getElementById('confirmar-senha');
const erroNome = document.getElementById('erroNome');
const erroEmail = document.getElementById('erroEmail');
const erroSenhaVazia = document.getElementById('erroSenhaVazia');
const erroSenhaPequena = document.getElementById('erroSenhaPequena');
const erroConfirmarSenha = document.getElementById('erroConfirmarSenha');
const inputConfirmarSenha = document.getElementById('inputConfirmarSenha');
const inputSenha = document.getElementById('inputSenha');
const verSenha = document.getElementById('verSenha');
const verConfimarSenha = document.getElementById('verConfirmarSenha');
let inputsValidos;


form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();

    if(inputsValidos){
        alert('Cadastrado com sucesso');
        form.reset();
        window.open('https://menu-responsivo-beryl.vercel.app');
    }
})

nomeUsuario.addEventListener('input', () => {
    nomeUsuario.style.border = 'none';
    erroNome.style.display = 'none';
})

const checkInputs = () => {
    if (nomeUsuario.value == '') {
        nomeUsuario.style.border = '2px solid rgb(247, 89, 89)';
        erroNome.style.display = 'block';
    }
    
    if(email.value == ''){
        email.style.border = '2px solid rgb(287, 89, 89)';
        erroEmail.style.display = 'block';
    }

    if(senha.value == ''){
        inputSenha.style.border = '2px solid rgb(287, 89, 89)';
        erroSenhaVazia.style.display = 'block';
    }

    if( senha.value != '' && senha.value.length < 8){
        erroSenhaVazia.style.display = 'none';
        inputSenha.style.border = '2px solid rgb(287, 89, 89)';
        erroSenhaPequena.style.display = 'block';
    }

    if(senha.value != '' && confirmarSenha.value == ''){
        inputConfirmarSenha.style.border = '2px solid rgb(287, 89, 89)';
        erroConfirmarSenha.style.display = 'block';
    }

    if(nomeUsuario.value != '' && email.value != '' && senha.value != '' && senha.value.length >= 8 && confirmarSenha.value == senha.value){
        inputsValidos = true;
    }
}

email.addEventListener('input', () => {
    email.style.border = 'none';
    erroEmail.style.display = 'none';
})

senha.addEventListener('input', () => {
    if(senha.value != '' && senha.value.length >= 8){
        inputSenha.style.border = 'none'; 
    }
    if(senha.value != ''){
        erroSenhaPequena.style.display = 'block'
        erroSenhaVazia.style.display = 'none';
    }
    if(senha.value.length >= 8){
        erroSenhaPequena.style.display = 'none';
    }
})

confirmarSenha.addEventListener('input', () => {
    if(confirmarSenha.value != senha.value){
        inputConfirmarSenha.style.border = '2px solid rgb(287, 89, 89)';
        erroConfirmarSenha.style.display = 'block';
    } else{
        inputConfirmarSenha.style.border = 'none';
        erroConfirmarSenha.style.display = 'none';
    }
})

verSenha.addEventListener('click', () => {
    if(verSenha.classList.contains('fa-eye-slash')){
        senha.type = 'text';
        verSenha.classList.remove('fa-eye-slash');
        verSenha.classList.add('fa-eye');
    }else{
        senha.type = 'password';
        verSenha.classList.remove('fa-eye');
        verSenha.classList.add('fa-eye-slash');
    }
})

verConfimarSenha.addEventListener('click', () => {
    if(verConfimarSenha.classList.contains('fa-eye-slash')){
        confirmarSenha.type = 'text';
        verConfimarSenha.classList.remove('fa-eye-slash');
        verConfimarSenha.classList.add('fa-eye');
    }else{
        confirmarSenha.type = 'password';
        verConfimarSenha.classList.remove('fa-eye');
        verConfimarSenha.classList.add('fa-eye-slash');
    }
})

