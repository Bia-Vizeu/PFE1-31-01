function primo() {
    let numero = parseInt(document.getElementById('numero').value);
    let mensagem = document.getElementById('mensagem');

    if (isNaN(numero) || numero < 2) {
        mensagem.innerHTML = 'Por favor, insira um número inteiro maior ou igual a 2.';
    } else {
        let ehPrimo = true;
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                ehPrimo = false;
                break;
            }
        }
        mensagem.innerHTML = ehPrimo ? `${numero} é um número primo.` : `${numero} não é um número primo.`;
    }
}
