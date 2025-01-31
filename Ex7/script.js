function contarVotos() {
    const totalEleitores = parseInt(prompt("Digite o número total de eleitores:"));

    let votosCandidato1 = 0;
    let votosCandidato2 = 0;
    let votosCandidato3 = 0;

    for (let i = 0; i < totalEleitores; i++) {
        let voto = parseInt(prompt(`\nVoto do eleitor ${i + 1}:\n1 - Candidato 1\n2 - Candidato 2\n3 - Candidato 3\nDigite o número do candidato escolhido (1, 2 ou 3):`));

        if (voto === 1) {
            votosCandidato1++;
        } else if (voto === 2) {
            votosCandidato2++;
        } else if (voto === 3) {
            votosCandidato3++;
        } else {
            alert("Voto inválido! Voto não contabilizado.");
        }
    }

    alert("\nResultado da eleição:\n" +
          `Candidato 1: ${votosCandidato1} votos\n` +
          `Candidato 2: ${votosCandidato2} votos\n` +
          `Candidato 3: ${votosCandidato3} votos`);
}

contarVotos();
