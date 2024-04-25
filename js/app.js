const nome = document.querySelector('.formulario__input__nome');
const email = document.querySelector('.formulario__input__email');
const assunto = document.querySelector('.formulario__input__assunto');
const mensagem = document.querySelector('.formulario__textare');


function enviar() {
    verificarNome()
    
    verificarAssunto()
    verificarMensagem()
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

// function verificarEmail() {
//     var emailValor = email.value;
//     if (emailValor.length == 0) {
//         document.getElementById('erroVazioEmail').style.display = 'block';
//     } 
//     else { (emailValor.length > 50) 
//         document.getElementById('erroLimiteEmail').style.display = 'block';
//     }
// }

function verificarAssunto() {
    var assuntoValor = assunto.value;
    if (assuntoValor.length == 0) {
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
    else  { (mensagemValor.length > 50)
        document.getElementById('erroLimiteMensagem').style.display = 'block';
    }
}

