const months = ["Jan", "March", "April", "June"];

function updateArr(arr) {
    arr.splice(3, 1, "May");
}

updateArr(months);

console.log("the content of the months arr after calling updateArr:", months);

function clearArr(arr) {
    arr.splice(0, 4);
}

clearArr(months);

console.log("the content of the months arr after calling clearArr:", months);
