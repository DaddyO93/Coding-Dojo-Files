// Values and Sum 
var testArr = [6, 3, 5, 1, 2, 4];
var sum = 0;
for (var i = 0; i < testArr.length; i++) {
    console.log("Num: " + testArr[i]);
    sum = sum + testArr[i];
    console.log("Sum: " + sum);
}

// Value and Position 
var testArr = [6, 3, 5, 1, 2, 4];
for (var i = 0; i < testArr.length; i++) {
    console.log(i * testArr[i]);
}