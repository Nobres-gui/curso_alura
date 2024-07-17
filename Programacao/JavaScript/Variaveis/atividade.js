// 1
const texto = 'Olá, mundo!';
const numero = 42;
const booleano = true;

console.log(typeof texto); // String
console.log(typeof numero); // Number
console.log(typeof booleano); // Boolean
// 2
const primeiroNome = 'Carlos';
const ultimoNome = 'Drummond de Andrade';

// Usando o operador +
const nomeCompletoConcatenado = primeiroNome + ' ' + ultimoNome;
console.log('Usando operador +: ', nomeCompletoConcatenado);

// Usando template strings
const nomeCompletoTemplate = `${primeiroNome} ${ultimoNome}`;
console.log(`Usando template strings: ${nomeCompletoTemplate}`);
// 3
const numero2 = 42;
const string = 'universo';

const texto2 = `${numero} é a resposta para a pergunta mais importante do ${string}`;
console.log(texto);
// 4
let minhaVariavel = 'Primeiro valor';
console.log(minhaVariavel);

minhaVariavel = 'Novo valor';
console.log(minhaVariavel);
// 5
var fora = 'Fora do bloco';

if (true) {
    var dentro = 'Dentro do bloco';
    console.log(fora); // retorna 'Fora do bloco'
    console.log(dentro); // retorna 'Dentro do bloco'
}

console.log(fora); // retorna 'Fora do bloco'
console.log(dentro); // retorna 'Dentro do bloco'

/////////////////////

let fora = 'Fora do bloco';

if (true) {
    let dentro = 'Dentro do bloco';
    console.log(fora); // retorna 'Fora do bloco'
    console.log(dentro); // retorna 'Dentro do bloco'
}

console.log(fora); // retorna 'Fora do bloco'
console.log(dentro); // erro 'dentro is not defined'

// 6
const estaChovendo = true;

if (estaChovendo) {
    console.log('É melhor levar um guarda-chuva!');
} else {
    console.log('O tempo está bom, sem necessidade de guarda-chuva.');
}

// 7
console.log(frase.length);
console.log(frase.toLowerCase());

// 8
const var1 = null;
let var2;

console.log(var1);
console.log(var2);

// 9
const number = 23;
const string2 = "bananas";
const boolean = false;

const combinacao = `Você tem ${number} ${string2}? ${boolean}`;
console.log(combinacao);

// 10
const number2 = 33;
const string3 = '54'

const number2Convertido = String(number2);
const string3Convertido = Number(string3);

console.log('Tipo de dado após conversão de número para string: ', typeof number2Convertido);
console.log('Tipo de dado após conversão de string para número: ', typeof string3Convertido);

// 11

const texto3 = 'JavaScript é incrível!';

const maiusculas = texto.toUpperCase();
const minusculas = texto.toLowerCase();
const parteDaString = texto.slice(0, 10);

console.log('Texto em maiúsculas:', maiusculas);
console.log('Texto em minúsculas:', minusculas);
console.log('Parte da string:', parteDaString);