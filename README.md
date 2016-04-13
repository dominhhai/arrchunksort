# arrchunksort
Sort array by chunks

# INSTALL
`npm install arrchunksort`

# API
```javascript
var chunksort = require('arrchunksort')
chunksort(array, chunksize, compare)
```

# SHOW CASES
`chunksort([3, 2, 1, 4])`
> Result: [1, 2, 3, 4]

`chunksort([3, 2, 1, 4], 2)`
> Result: [1, 4, 3, 2]

`chunksort([4, 2, 3, 1], 2)`
> Result: [3, 1, 4, 2]

```javascript
chunksort(
  [4, 1, 3, 2], 2,
  function (a, b) {
    if (a[0] > b[0]) return -1
    if (a[0] < b[0]) return 1
    return 0
  }
)
```
> Result: [4, 1, 3, 2]
