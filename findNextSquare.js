function findNextSquare(sq) {
  // Return the next square if sq if a perfect square, -1 otherwise
   
  let x = Math.sqrt(sq);

  if (sq % x === 0) {
      let nextSq = Math.sqrt(sq) + 1;
      return Math.pow(nextSq, 2);
  }
 
  return -1;
     
}