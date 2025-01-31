// Função principal
function calcularMedia() {
    const nota1 = parseFloat(prompt("Digite a primeira nota do aluno:"));
    const nota2 = parseFloat(prompt("Digite a segunda nota do aluno:"));

    const media = (nota1 + nota2) / 2;

    if (media === 10) {
        alert("Aprovado com Distinção");
    } else if (media >= 7) {
        alert("Aprovado");
    } else {
        alert("Reprovado");
    }
}

calcularMedia();
