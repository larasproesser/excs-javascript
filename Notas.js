//Receba 3 notas de um aluno
//Calcule sua média
//Mostre as seguintes mensagens:
//-Se média >=7: Aprovado
//-Se média >=5 & <7: Recuperação
//-Se média <5: Reprovado

function  calculaMedia(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3)/3

    if (media >= 7) {
        return 'Aprovado'
    }

    if (media >=5 && media <7) {
        return 'Recuperação'
    }

    if (media <5) {
        return 'Reprovado'
    }
}

console.log(calculaMedia(8,5,8))