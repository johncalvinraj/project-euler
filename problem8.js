function approach1() {
  var answer = 0;
  console.log('a')
  for(var i = 0; i <= 1000; i++) {
    for(var j = 0; j <= 1000; j++) {
      for(var k = 0 ; k <= 1000; k++) {
        if(i + j + k === 1000) {
          if(k*k + j*j === i*i)  {
            answer = k*j*i
            break
          }
        }  
      }
      if (answer != 0) {
        break
      }
    }
    if (answer != 0 ) {
      break
    }
  }
  console.log(answer)
}

function approach2() {
  var answer = 0
  for (var i = 0; i <= 1000; i++) {
    if (answer != 0) {
      break
    } 
    for (var j = 0; j <= 1000; j++) {
      k = 1000 - (i + j)
      if (j*j + k*k === i*i) {
        answer = j * k * i
        break
      }
    }
  }
  console.log(answer)
  return answer
}

console.log(approach2())