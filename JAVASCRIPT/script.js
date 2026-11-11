alert("Olá mundo");
console.log("Olá mundo"); // equivalente ao print do python

// Saída de dados
console.log("-----------------"); // não se esqueça do ; no final
console.log(10);

// Variáveis
// para declarar usamos o let(declare)/var;const/, para declarar a variável, ele detecta o tipo que nem no python, automaticamente

var x = 10; // não é mais usado
let y = 20; // uma variável que pode variar(mais usado)
const z = 30; // uma variável que não varia, que é constante(pouco usado)

// Tipos de dados:
console.log("-----------");
console.log("Tipos de dados");
let A = 10;
let B = 10.5;
let C = "aaaa";
let D = true; //true e false com as iniciais minúsculas, diferente do python

console.log(typeof(A)); // Não existe o float no javascript, então o tipo é number, o A e o B
console.log(typeof(B));
console.log(typeof(C)); // O tipo é uma string
console.log(typeof(D)); // O tipo é um boolean
console.log(typeof(E)); // Não foi definido, ou seja não existe, undefined

// Print formatado
// Se usa a crase
let nome = "Davi";

console.log(`Olá ${nome}`); // o $ é para dizer que é uma varíavel

// Operadores
console.log("----------");
console.log("Operadores");
let a = 10;
let b = 3;
console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.33
console.log(a % b);  // 1
console.log(a ** b); // 1000
console.log(Math.floor(a / b)); // 3
console.log(Math.ceil(a / b)); // 4

// Relacionais
console.log("----------");
console.log("Operadores Relacionais");
console.log(a > b);   // true
console.log(a >= b);  // true
console.log(a < b);   // false
console.log(a <= b);  // false
console.log(a == b);  // false
console.log(a != b);  // true

// Lógicos
console.log("----------");
console.log("Operadores Lógicos");
console.log((a > b) && (3 > 10)); // and
console.log((a < b) || (3 > 10)); // or
console.log(!(false)); // not

// Condicionais (if/else if/else)
console.log("----------");
console.log("Condicionais");
let idade = 10;

if (idade >= 18){
    console.log("Adulto");
} else if (idade >= 13){
    console.log("Adolescente");
} else {
    console.log("Criança");
}

// Laços (while e for)
console.log("----------");
console.log("Laço while");
let contador = 5;

while (contador > 0){
    console.log(contador);
    contador--; //contador -= 1; // contador = contador - 1
}

console.log("Laço for"); //i++ é a mesma coisa que contador +=1
for (let i = 1; i <= 5; i++){ // início, fim , passo
    console.log(i);     
}