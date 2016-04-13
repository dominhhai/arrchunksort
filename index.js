function sort (arr, size, fn) {
  fn = fn || compare
  if (typeof fn !== 'function') {
    return new Error('compare is not a function')
  }
  var chunks = split(arr, size)
  chunks.sort(fn)

  return concat(chunks)
}

function split (arr, size) {
  size = size || 1
  if (size < 1) size = 1
  else if (size > arr.length) size = arr.length

  var chunks = []
  var i = 0
  while (i < arr.length) {
    var chunk = []
    for (var j = i + size; i < j && i < arr.length; i++) {
      chunk.push(arr[i])
    }
    chunks.push(chunk)
  }
  return chunks
}

function concat (arr) {
  var result = []
  arr.forEach(function (chunk) {
    result = result.concat(chunk)
  })
  return result
}

function compare (a, b) {
  if (a[0] > b[0]) return 1
  if (a[0] < b[0]) return -1
  return 0
}

exports = module.exports = sort
exports.split = split
