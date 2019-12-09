var reverse = function(x) {

    if (x > 2**32) {
        return 0;
    }

    isNegative = false;
    if (x < 0) {
        isNegative = true;
    }

    var finalX = [];
    var newX = x.toString().split('');

    for (let i = newX.length-1; i >= 0; i--) {
        finalX.push(newX[i]);
    }

    returnX = parseInt(finalX.join(''));
    
    if (isNegative) {
        return (returnX - (returnX * 2));
    } else {
        return returnX
    }
    
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(987654321));