// EX1. Create a function that calculates any kind of formula using two
// variables.

function compareNums(arg1, arg2) {
    if (arg1 > arg2) {
        console.log(
            `your first argument- ${arg1} is greater than the second- ${arg2}`
        );
    } else if (arg1 < arg2) {
        console.log(
            `your second argument- ${arg2} is greater than the first- ${arg1}`
        );
    } else {
        console.log("Numbers are equal");
    }
}

let num1 = 11;
let num2 = 11;
let num3 = 10;
let num4 = 8;
compareNums(num1, num2);
compareNums(num2, num3);
compareNums(num3, num4);

//EX2. Create an action on JavaScript for when you click in the Submit Button the design of the button and/or
// the Form changes.

function submitPopup() {
    alert("Form Submitted!");
}

let button = document.getElementById("button");
button.addEventListener("click", submitPopup());

// EX3. Create a function using the arrow function format, that performs any action/calculation, whatever you
// want! Example: let myFunction = (x, y) => y - x;

let arrowCompare = (param1, param2) => {
    if (param1 > param2) {
        console.log(
            `The first argument- ${param1} is greater than the second- ${param2}`
        );
    } else if (param1 < param2) {
        console.log(
            `The second argument- ${param2} is greater than the first- ${param1}`
        );
    } else {
        console.log("Numbers are the same");
    }
};

arrowCompare(num1, num2);
arrowCompare(num2, num3);
arrowCompare(num3, num4);
