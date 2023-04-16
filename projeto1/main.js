let botaoCalcular = document.getElementById("btn_calcular")
botaoCalcular.addEventListener('click',calcularIMC)

function calcularIMC () {
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;

    let imc = peso/(altura*altura)

    let resultado = document.getElementById('resultado')

    resultado.textContent = `Seu IMC é: ${imc}`
}