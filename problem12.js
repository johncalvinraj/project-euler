for (var n = 0;;n++) {
  var a = n*(n+1)/2
  if (n % 300 ==0 ) console.log(n, a)
  var nfactor = 1
  for (var i = 1; i <= Math.sqrt(a); i++) {
    if (a % i == 0 ) {
      nfactor++
    }
  }
  if (nfactor * 2 >= 500) {
    console.log(a)
    console.log(nfactor)
    break
  }
}