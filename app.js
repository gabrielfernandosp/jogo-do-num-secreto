let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Braziliam Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial(); //preciso chamar essa função fora de qualquer outra função para que ela iniciar quando o
//                         código for lido pela primeira vez.
function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', `Acertou!` );
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled'); 
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', `O número secreto é menor.`);
        } else {
            exibirTextoNaTela('p', `O número secreto é maior.`);
    }
        tentativas++;
        limparCampo();
}
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosDaLista = listaDeNumerosSorteados.length;// tamanho da lista

    if (quantidadeDeElementosDaLista == numeroLimite) {
        listaDeNumerosSorteados = []; // colchetes vazio quer dizer que estamos limpando a lista.
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {// includes(JS) verifica se o elemento já está na 
        return gerarNumeroAleatorio();//                       lista. Se estiver gera outro número.
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);//  push serve para adicionar item sempre ao final da lista 
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = ''; // valor do chute passa a ser uma string vazia.
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true); //setAttibute: estou colocando novamente o 
}//                                                                 atributo disabeld para desabilitar o botão
//                                                                  novo jogo. Esse botão só vai aparecer quando
//                                                                  eu acertar o número secreto.



// document.querySelector: estamos buscando no html. 'let' usamos só p/ criar a variável titulo. 
// innerHTML seria traduzido como "dentro do html".
// h1 (tag) é geralmente usado para dar nome à pagina. 
// Depois buscamos a tag do paragrafo (p) no html.
// Função: um trecho de código que é responsável por uma determinada ação. 
// A nomenclatura da função deve ser a mesma no js e html e cada função terá apenas uma responsabilidade.
// A função exibirTextoNaTela subustitui/compacta os comandos das expressões abaixo:
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do Número Secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
// O JS lê linha a linha. Isso significa que podemos chamar a função antes e definí-la depois.
// É o que está ocorrendo na função gerarNumeroAleatório(). No início do código armazenamos o número secreto como
// resultado dessa função, que só foi definida mais a frente.
// Return: retorna (mostra) o valor gerado pela função.
// nunca esquecer: uma informação entre aspas é uma string (palavra, frase, etc). Sem aspas é uma variável.

// Na string exibirTextoNaTela('p', `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`)
// pode ser que o JS não identifique o parâmetro pois exitem duas variáveis (${tentativas} ${palavraTentativas})
// dentro da string. Sendo assim, criamos uma variável mensagemTentativa para evitar esse erro que pode acontecer.
// Uso do let: toda vez que eu quiser definir/armazenar uma variável. Uma vez armazenada, não preciso mais usar
// let para chamar essa variável.
// getElementById: buscar o elemento definido por um ID no html.
// removeAttribute: removendo esse atributo (disabled).
// toda função precisa ser colocado parênteses no final.

// Sempre que trabalharmos com listas no JS (e na maioria das linguagens) utilizamos colchetes. Também 
// conseguimos visualizar o tamanho da lista utilizando length. 
// O primeiro elemento da lista sempre vai ter o índice 0 (posição do elemento).
// Como a lista sempre começa com o elemento 0, posso pegar o último elemento da lista com o seguinte código:
// lista[length - 1].

// Nesse projeto, vamos definir uma lista para que os números do jogo não se repita. É necessário criar a lista 
// primeiro antes do comando gerarNumeroAleatorio, senão irá acontecer um erro pois o JS lê linha a linha.