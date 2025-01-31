function calcularMedia() {
    let notasInput = document.getElementById('notas').value;
    let mensagem = document.getElementById('mensagem');
    
    let notas = notasInput.split(',').map(n => parseFloat(n.trim())).filter(n => !isNaN(n));
    
    if (notas.length === 0) {
        mensagem.innerHTML = 'Insira pelo menos uma nota válida.';
        return;
    }
    
    let soma = notas.reduce((acc, nota) => acc + nota, 0);
    let media = soma / notas.length;
    
    mensagem.innerHTML = `A média das ${notas.length} notas é: ${media.toFixed(2)}`;
}
