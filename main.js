let numero1 = document.querySelector('#entrada1');
let numero2 = document.querySelector('#entrada2');
let resultado = document.querySelector('#resultado');
let resultadob = document.querySelector('#resultadob');

function somar() {
    let final = Number(numero1.value) + Number(numero2.value);

    resultadob.value = final;

}
function multiplicacao() {
    let final = Number(numero1.value) * Number(numero2.value);

    resultadob.value = final;

}
function divisao() {
    let final = Number(numero1.value) / Number(numero2.value);

    resultadob.value = final

}
function subtracao() {
    let final = Number(numero1.value) - Number(numero2.value);

    resultadob.value = final
}


function imc() {

    let altura = document.querySelector('#altura').value;
    let peso = document.querySelector('#peso').value;

    let imcresultado = Number(peso) / (Number(altura) * Number(altura));


    document.querySelector('#imcresultado').value = imcresultado.toFixed(2);


    let consideracoes = document.getElementById('consideracoes');
    if (imcresultado < 18.5) {
        consideracoes.textContent = 'abaixo do peso';
    } else if (imcresultado >= 18.5 && imcresultado <= 24.9) {
        consideracoes.textContent = 'peso Normal';
    } else if (imcresultado > 24.9 && imcresultado <= 29.9) {
        consideracoes.textContent = 'acima Do Peso';
    } else if (imcresultado > 30 && imcresultado <= 34.9) {
        consideracoes.textContent = 'obesidade 1';
    } else if (imcresultado >= 35 && imcresultado <= 39.9) {
        consideracoes.textContent = 'obesidade 2';
    } else {
        consideracoes.textContent = 'Obesidade grau 3';
    }

}
/*
function imc() {
   
    let altura = document.querySelector('#altura').value;
    let peso = document.querySelector('#peso').value;

    let resultadoIMC = Number(peso) / (Number(altura) * Number(altura));

    document.querySelector('#imcresultado').value = resultadoIMC.toFixed(2);

    // Definir as considerações baseadas no IMC calculado
    let consideracoes = document.getElementById('consideracoes');
    if (resultadoIMC < 18.5) {
        consideracoes.textContent = 'Abaixo do peso';
    } else if (resultadoIMC >= 18.5 && resultadoIMC <= 24.9) {
        consideracoes.textContent = 'Peso normal';
    } else if (resultadoIMC >= 25 && resultadoIMC <= 29.9) {
        consideracoes.textContent = 'Sobrepeso';
    } else if (resultadoIMC >= 30 && resultadoIMC <= 34.9) {
        consideracoes.textContent = 'Obesidade grau 1';
    } else if (resultadoIMC >= 35 && resultadoIMC <= 39.9) {
        consideracoes.textContent = 'Obesidade grau 2';
    } else {
        consideracoes.textContent = 'Obesidade grau 3';
    }

}
*/
