/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do Número Secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
*/

//analisar:
/*let campo = document.querySelector(tag);
campo.innerHTML = texto;
*/
let listaNumerosSorteados = [];
let numeroLimite = 3;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;
exibirMensagemInicial();

function exibirMensagemInicial(){
seletorHtml('h1', 'Jogo do Número Secreto');
seletorHtml('p', 'Escolha um número entre 1 e 10');
}

function seletorHtml (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function numeroAleatorio () {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantElemLista = listaNumerosSorteados.length;
    if(quantElemLista === numeroLimite){
        listaNumerosSorteados = [];
    }
    if(listaNumerosSorteados.includes(numeroEscolhido)){
        return numeroAleatorio();
    }else{
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
 }

function verificarChute(){
    let chute = document.querySelector('input').value;
    //console.log(numeroSecreto);
    if(chute == numeroSecreto){
        seletorHtml('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagensTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;     
        seletorHtml('p', mensagensTentativas);

        //Nesta parte, quando eu acertar o jogo, ele irá remover o atributo que está 
        //escrito disabled no html e irá habilitar essa função;
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        let texto = numeroSecreto < chute ? 'O numero secreto é menor': 'O numero secreto é maior';
        seletorHtml('p',texto);
        tentativas++;
        limparCampo();
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function novoJogo() {
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


