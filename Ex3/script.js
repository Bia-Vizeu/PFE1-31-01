function primo() {
    let numero = parseInt(document.getElementById('numero').value);
    let mensagem = document.getElementById('mensagem');

    if (isNaN(numero) || numero < 2) {
        mensagem.innerHTML = 'Insira um número maior ou igual a 2.';
        return;
    }
    
    let divisores = [];
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) divisores.push(i);
    }
    
    mensagem.innerHTML = divisores.length === 0 ? `${numero} é primo.` : `${numero} não é primo. Divisível por: ${divisores.join(', ')}.`;
}
