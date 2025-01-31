function exibirDia() {
    const numero = parseInt(prompt("Digite um número de 1 a 7:"));
    let resultado = '';

    switch (numero) {
        case 1:
            resultado = 'Domingo';
            break;
        case 2:
            resultado = 'Segunda-feira';
            break;
        case 3:
            resultado = 'Terça-feira';
            break;
        case 4:
            resultado = 'Quarta-feira';
            break;
        case 5:
            resultado = 'Quinta-feira';
            break;
        case 6:
            resultado = 'Sexta-feira';
            break;
        case 7:
            resultado = 'Sábado';
            break;
        default:
            resultado = 'Valor inválido!';
            break;
    }


    alert(resultado); 
}

exibirDia();
