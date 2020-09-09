var minIncrementForUnique = function(a) {
  let l = undefined
  let i = 0
  a.sort( (a,b) => a - b )
  a.forEach(
    v => {
      if(l != undefined && ( l >= v )) {
        const j = (l - v) + 1
        i += j
        l = v + j
      } else {
        l = v
      }
    }
  )
  return i
}