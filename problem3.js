function isPrime(input) {
    var prime = true;
    for (var i = 2; i <= Math.sqrt(input); i++) {
        if (input % i == 0) {
            prime = false;
            break;
        }
    }
    return prime && (input > 1);
}
function primeFactorization(arg1) {
  var b,
      c = [];
    
  for (var i = 2; i <= arg1;i++){
    var a = 0;
    if (isPrime(i) && (arg1 % i === 0)) {
      while (arg1 % i === 0) {
        arg1 /= i
        a++          
      }
      c.push([i,a]) 
    }
       
  }
    return c
}

console.log('hello')
console.log(primeFactorization(600851475143))