// Exercícios JavaScript

//FizzBuzz
//Divisivel por 3=> 'Fizz',
//Divisivel por 5 => 'Buzz',
//Divisivel por 3 e 5 => 'FizzBuzz',
//Se não for um núemro => 'Não é numero',
//Se não for divisivel por 3 nem por 5 => Entrada

let resultado = fizzBuzz(3);
console.log(resultado)

function fizzBuzz(entrada) {
    if(typeof entrada != 'number')
        return 'Não é número';
    if((entrada % 3 ==0) && (entrada %5 ==0))   
        return 'FizzBuzz';

    if(entrada % 3 == 0)
        return 'Fizz';
    if(entrada % 5 == 0)
        return 'Buzz';

    return entrada;    
    
}