let numeroGerado;

function sortear() {
    let qtdNumeros = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let resultado = document.getElementById('resultado');

    let sorteados = [];
    for(let i = 0; i < qtdNumeros; i++){
        numeroGerado = obterNumeroAleatorio(de, ate);

        while(sorteados.includes(numeroGerado)){
         numeroGerado = obterNumeroAleatorio(de,ate);
        }

        sorteados.push(numeroGerado);
    }
    if(sorteados.length > 1){
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`
    }else{
        resultado.innerHTML = `<label class="texto__paragrafo">Número sorteado: ${sorteados}</label>`

    }
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao(){
    let botaoReiniciar = document.getElementById('btn-reiniciar');

    if(botaoReiniciar.classList.contains('container__botao-desabilitado')){
        botaoReiniciar.classList.remove('container__botao-desabilitado')
        botaoReiniciar.classList.add('container__botao');
    }else{
        botaoReiniciar.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado')
    }
}

function reiniciar(){
    window.location.reload()
}
