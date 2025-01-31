function zeroamil(){
    let numero = parseFloat(document.getElementById('numero').value);
    let mensagem = document.getElementById('mensagem');

    if (numero <= 0 || numero >= 1000)
        mensagem.innerHTML = 'Informe um número entre 1 e 999.';
    else {
        mensagem.innerHTML = 'Obrigada!!'

}}