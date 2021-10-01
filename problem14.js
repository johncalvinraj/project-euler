let start = 1

function collatz(n) {
  var count = 0
  while (n != 1) {
    if (n % 2) {
      n *= 3
      n += 1
    }
    else {
      n /= 2
    }
    count++
  }
  return count
}

let max = 0
let maxStart = 1
while (start < 1000000) {
  let len = collatz(start)
  if (len > max) {
    maxStart = start
    max = len
  }
  start++
}
console.log(maxStart)