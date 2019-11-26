//Write a functyion that takes in an integer and returns the
//corresponding day of the week.

function daysOfWeek (num) {
    let key = {
        1: "Sunday",
        2: "Monday",
        3: "Tuesday",
        4: "Wednesday",
        5: "Thursday",
        6: "Friday",
        7: "Sunday",
    }

    return key[num];

}

console.log(daysOfWeek(2)) // Monday
console.log(daysOfWeek(5)) // Thursday
console.log(daysOfWeek(7)) // Sunday