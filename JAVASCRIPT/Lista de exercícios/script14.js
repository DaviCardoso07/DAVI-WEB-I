let a = 0;
let b = 1;
let c = 0;
let contador = 0;

while (contador < 7) {
  console.log(a);
  
  c = a + b;
  a = b;
  b = c;
  
  contador++;
}

