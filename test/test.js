const test = require('tape')
var chunksort = require('../index')

test('array split', function (t) {
  t.deepEqual(chunksort.split([1, 2, 3, 4]), [[1], [2], [3], [4]])
  t.deepEqual(chunksort.split([1, 2, 3, 4], 0), [[1], [2], [3], [4]])
  t.deepEqual(chunksort.split([1, 2, 3, 4], 1), [[1], [2], [3], [4]])
  t.deepEqual(chunksort.split([1, 2, 3, 4], 2), [[1, 2], [3, 4]])
  t.deepEqual(chunksort.split([1, 2, 3, 4], 3), [[1, 2, 3], [4]])
  t.deepEqual(chunksort.split([1, 2, 3, 4], 4), [[1, 2, 3, 4]])
  t.deepEqual(chunksort.split([1, 2, 3, 4], 5), [[1, 2, 3, 4]])

  t.end()
})

test('array sort', function (t) {
  t.deepEqual(chunksort([3, 2, 1, 4]), [1, 2, 3, 4])
  t.deepEqual(chunksort([3, 2, 1, 4], 2), [1, 4, 3, 2])
  t.deepEqual(chunksort([4, 2, 3, 1], 2), [3, 1, 4, 2])

  t.deepEqual(chunksort(
    [4, 1, 3, 2], 2,
    function (a, b) {
      if (a[0] > b[0]) return -1
      if (a[0] < b[0]) return 1
      return 0
    }
  ), [4, 1, 3, 2])

  t.end()
})
