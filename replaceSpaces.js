const replaceSpaces = (str) => {
  if (str.length < 1) return "";

  strArr = str.split("");

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === " ") {
      strArr[i] = "%20";
    }
  }

  return strArr.join("");

}

console.log(replaceSpaces('hello there'));
