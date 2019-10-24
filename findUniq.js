// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains more than 3 numbers.

// The tests contain some very huge arrays, so think about performance.


function findUniq(arr) {

    function finder (repeater) {
        for (let i = 0; i < arr.length; i++) {
            if (repeater !== arr[i]) {
                return arr[i];
            }
        }
    }
   
   if (arr[0] === arr[1]) {
       return finder(arr[0]);
       
   }
   
   else if (arr[1] === arr[2]) {
       return finder(arr[1]);
   }
   
   else if (arr[0] === arr[2]) {
       return finder(arr[0]);
   }            
       
}
