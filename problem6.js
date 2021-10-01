var v = 0
var p = 2
var m = 2
while (v < 10001) {  
  var prime = true;
  for (var i = 2; i <= Math.sqrt(p); i++) {
    if (p % i == 0 ) {
      prime = false;
    }
  }
 
  if (prime) {
    console.log(p)
    m = p
    v++
  }
  p++
}
console.log(m)