function passWordFunction(str) {
    
    function hasUpperCase(str) {
        return str !== str.toLowerCase;
    }

    function hasLowerCase(str) {
        return str !== str.toUpperCase;
    }
    
    if (str.length > 8 && hasLowerCase(str) && hasUpperCase(str)) {
        return true;
    } else {
        return false;
    }

}

console.log(passWordFunction('hiiiiiIII'));