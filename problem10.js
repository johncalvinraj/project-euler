var x = 
var max = 0;
for (var i = 0;i < 1000;i++) {
  var product = x[i] * x[i+1] *x[i+2] * x[i+3] * x[i+4] * x[i+5] * x[i+6] * x[i+7] * x[i+8] * x[i+9] * x[i+10] * x[i+11] * x[i+12]
  if (product > max) {
    max = product;  
  }
}
console.log(max)