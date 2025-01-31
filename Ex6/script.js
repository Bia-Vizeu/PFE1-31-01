function calcularMediaIdade() {
    let idadesInput = document.getElementById('idades').value;
    let mensagem = document.getElementById('mensagem');
    
    let idades = idadesInput.split(',').map(n => parseInt(n.trim())).filter(n => !isNaN(n) && n > 0);
    
    if (idades.length === 0) {
        mensagem.innerHTML = 'Insira pelo menos uma idade válida.';
        return;
    }
    
    let soma = idades.reduce((acc, idade) => acc + idade, 0);
    let media = soma / idades.length;
    
    let classificacao;
    if (media <= 25) {
        classificacao = 'Turma Jovem';
    } else if (media <= 60) {
        classificacao = 'Turma Adulta';
    } else {
        classificacao = 'Turma Idosa';
    }
    
    mensagem.innerHTML = `A média de idade é ${media.toFixed(2)}. Classificação: ${classificacao}.`;
}
