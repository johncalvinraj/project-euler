var p = 2
var m = 0
while (p < 2000000) {  
  if (p%1000 == 0) {
    console.log(p)
  }
  var prime = true
  for (var i = 2; i <= Math.sqrt(p); i++) {
    if (p % i == 0) {
      prime = false 
    }
  }
  if (prime) {
    m += p
  }
  p++
}
console.log(m)