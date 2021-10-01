var namelen = [0, 3, 3, 5, 4, 4, 3, 5, 5, 4]
var namelen2 = [3, 6, 6, 5, 5, 5, 7, 6, 6]
var namelen3 = [10, 10, 12, 11, 11, 10, 12, 12, 11]
var count = 0
console.log(namelen.reduce(function (a,b) {return a+b}))
for (var i = 20; i < 1000; i++) {
  i += ''
  if (i.length === 2) {
    if (i[1] != 0) {
      count += namelen[(i[1] - '')]
      console.log(namelen[(i[1] - '')])
      console.log(i)
    }
    if (i[0] != 0) {
      count += namelen2[(i[0] - '') - 1]
    }
  }  
  if (i.length === 3) {
    if (i[2] != 0) {
      count += namelen[(i[2] - '') - 1]
    }
    if (i[1] != 0) {
      count += namelen2[(i[1] - '') - 1]
    }
    if (i[0] != 0) {
      count += namelen3[(i[0] - '') - 1]
    }
  }
  i -= ''
}
console.log(count + namelen.reduce(function (a,b) {return a+b}) + 81)


var ones=['one', 'two']