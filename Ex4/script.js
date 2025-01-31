function encontrarPrimos() {
    let numero = parseInt(document.getElementById('numero').value);
    let mensagem = document.getElementById('mensagem');

    if (isNaN(numero) || numero < 2) {
        mensagem.innerHTML = 'Insira um número maior ou igual a 2.';
        return;
    }
    
    let primos = [];
    let totalDivisoes = 0;
    
    for (let n = 2; n <= numero; n++) {
        let ehPrimo = true;
        for (let i = 2; i * i <= n; i++) {
            totalDivisoes++;
            if (n % i === 0) {
                ehPrimo = false;
                break;
            }
        }
        if (ehPrimo) {
            primos.push(n);
        }
    }
    
    mensagem.innerHTML = `Números primos entre 1 e ${numero}: ${primos.join(', ')}.<br>Total de divisões realizadas: ${totalDivisoes}`;
}
