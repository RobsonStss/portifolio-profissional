const nome = document.querySelector('.formulario__input__nome');
const assunto = document.querySelector('.formulario__input__assunto');
const mensagem = document.querySelector('.formulario__textare');
var emaill = document.getElementById('formulario__input__email');
var form = document.getElementById('formulario__entrada');


function enviar() {
    verificarNome();
    verificarAssunto();
    verificarMensagem();
    verificarInputs();
}

function verificarInputs() {
    if (nome.value.trim() === '' || emaill.value.trim() === '' || assunto.value.trim() === '' || mensagem.value.trim() === '')  {
      alert('Por favor, preencha todos os campos corretamente!');
      return;
    } else {
        alert('Dados enviados');
        reloadPage();
        document.getElementById('erroVazioNome').style.display = 'none';
        document.getElementById('erroLimiteNome').style.display = 'none';
        document.getElementById('erroVazioEmail').style.display = 'none';
        document.getElementById('erroLimiteEmail').style.display = 'none';
        document.getElementById('erroVazioAssunto').style.display = 'none';
        document.getElementById('erroLimiteAssunto').style.display = 'none';
        document.getElementById('erroVazioMensagem').style.display = 'none';
        document.getElementById('erroLimiteMensagem').style.display = 'none';
    }
  }

function reloadPage() {
// Recarrega a página após um pequeno atraso (para permitir que o formulário seja enviado)
setTimeout(function() {
    location.reload();
}, 0); 
}


function verificarNome() {
    var nomeValor = nome.value;
    if (nomeValor.length == 0) {
        document.getElementById('erroVazioNome').style.display = 'block';
    }
    else  { (nomeValor.length > 50)
        document.getElementById('erroLimiteNome').style.display = 'block';
    }
}




form.addEventListener('submit', (e) => {
    if (emaill.value == '' ) {
        document.getElementById('erroVazioEmail').style.display = 'block';
    }
    e.preventDefault();
})

emaill.addEventListener('keyup', () => {
    if (certoEmail(emaill.value) !== true) {
        document.getElementById('erroLimiteEmail').style.display = 'block';
    } else {
        document.getElementById('erroLimiteEmail').style.display = 'none';
    }
})

function certoEmail(email) {
    let emailll = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailll.test(email);
}


function verificarAssunto() {
    var assuntoValor = assunto.value;
    if (assuntoValor.value == 0) {
        document.getElementById('erroVazioAssunto').style.display = 'block';
    }
    else  { (assuntoValor.length > 50)
        document.getElementById('erroLimiteAssunto').style.display = 'block';
    }
}

function verificarMensagem() {
    var mensagemValor = mensagem.value;
    if (mensagemValor.length == 0) {
        document.getElementById('erroVazioMensagem').style.display = 'block';
    }
    else  { (mensagemValor.length > 300)
        document.getElementById('erroLimiteMensagem').style.display = 'block';
    }
}

