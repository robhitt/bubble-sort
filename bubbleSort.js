var bubbleSort = function(array) {
  var iterationCount = 0

  for (i = 0, l = array.length - 1; i < l; i++) {
    var switchUp = false
    iterationCount += 1
    for (j = 0, k = array.length - 1; j < k; j++) {
      if (array[j] > array[j+1]) {
        var temp = array[j]
        array[j] = array[j+1]
        array[j+1] = temp
        switchUp = true
      }
    }
    if (switchUp === false) {
      console.log(iterationCount)
      return array
    }
  }
  console.log(iterationCount)
  return array
}
// bubbleSort([33,14])
console.log(bubbleSort([1,2,3,4,5]))
console.log("===========")
console.log(bubbleSort([10,33,14,40,27,35,1]))
