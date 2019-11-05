function pangramChecker(str) {
    if (str.length < 26) {
        return false;
    }
    let alphabet = 'qwertyuiopasdfghjklzxcvbnm'
    let newStr = str.toLowerCase();

    for (let i = 0; i < alphabet.length; i++) {
        if (newStr.indexOf(alphabet[i]) < 0) {
            return false;
        }
    } return true;
}

console.log("first test", pangramChecker('asdf'))
console.log(pangramChecker('Watch Jeopardy, Alex Trebek\'s fun TV quiz game'))
console.log(pangramChecker('Five hexing wizard bots jumped quickly'));
console.log(pangramChecker('JavaScript is the best'))