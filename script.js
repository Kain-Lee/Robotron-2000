const estatisticas = document.querySelectorAll('[data-estatistica]');

const controle = document.querySelectorAll('[data-controle]');

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}
//para cada botão ele vai aplicar uma função com a variável button
controle.forEach( (button) =>{
//e para esta variável button ele vai adicionar um evento de clique que ativa a função
//a variável dentro dele é equivalente ao evento, que vai ter o nome de evento
    button.addEventListener("click", (evento) =>{
//eu busco o evento manipulaDados e passo como parâmetro o o evento que vai mirar no conteúdo do dataset
//,,, vai apontar a div dominante da onde foi clickado e tornar possível definitor que a função será aplicada apenas dentro dessa div ao passar controle no lugar de document
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca)
    })
})

function manipulaDados(operacao, controle){
    const peca = controle.querySelector('[data-contador]');

    if(operacao === '-'){
    peca.value = parseInt(peca.value) - 1;

    }else{
    peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatisticas(peca){
    estatisticas.forEach((elemento)=>{
       elemento.textContent = parseInt(elemento.textContent) + pecas[peca] [elemento.dataset.estatistica];
    })
}