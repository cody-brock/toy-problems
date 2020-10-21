const isRotation = (s1, s2) => {
  if (s1.length !== s2.length || s1.length < 1) return false;

  return (s2 + s2).includes(s1);

}

console.log(isRotation('bumblebee', 'lebeebumb'));
console.log(isRotation('bumblebee', 'lebwebumb'));