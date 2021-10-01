var max = 0
for (var i = 100; i < 1000; i++) {
   for (var j = 100; j < 1000; j++) {
       if (i*j > max && (i*j + '').split('').reverse().join('') === i*j + '')  {
           max = i*j
       }
   }
}

console.log(max)