// Biggie Size
var arr = [-1, -2, 3, 4];

function biggieSize() {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = "big!";
        }
    }
}
biggieSize();
console.log(arr);

// Print Low, Return High 
var arr = [1, 2, 3, 4];
var low = arr[0];
var high = arr[0];

function plrh(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < low) {
            low = arr[i];
        } else if (arr[i] > high) {
            high = arr[i];
        }
    }
    console.log(low);
    return high;
}
plrh(arr);
console.log(high);

// Print One, Return Another 
var arr = [1, 2, 3, 4];
var high = arr[0];

function printReturn(arr) {
    console.log(arr[arr.length - 2]);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > high) {
            high = arr[i];
        }
    }
    return high;
}

printReturn(arr);
console.log(high);

// Double Vision
var arr = [1, 2, 3, 4];
var newArr = [];

function doubleVision(arr) {
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    }
}

doubleVision(arr);
console.log(newArr);

// Count Positives
var arr = [-1, 2, 3, 4];
var count = 0;

function countPositives(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
    }
    arr[arr.length - 1] = count;
    return arr;
}

countPositives(arr);
console.log(arr);

// Evens and Odds
var arr = [1, 1, 1, 2, 2, 2];
var odd = 0;
var evn = 0;

function evenOdd(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            evn++;
            if (odd >= 0) {
                odd = 0;
                if (evn >= 3) {
                    console.log("That's even more so!");
                }
            }
        } else if (arr[i] % 2 != 0) {
            odd++;
            if (evn >= 0) {
                evn = 0;
                if (odd >= 3) {
                    console.log("That's odd!");
                }
            }
        }
    }
}

evenOdd(arr);

// Increment the Seconds
var arr = [1, 2, 3, 4, 5, 6];
var counter = 0;

function incrementSeconds(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 != 0) {
            counter++;
            arr[i] += 1;
        }
        console.log(arr[i]);
    }
    return arr;
}

incrementSeconds(arr);

// Previous Lengths
var arr = ["this", "is", "the", "array"];
var strgLen = 0;

function previousLen(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        if (i > 0) {
            strgLen = arr[i - 1].length;
            arr[i] = strgLen;
        }
    }
    return arr;
}

previousLen(arr);
console.log(arr);

// Add Seven
var arr = [1, 2, 3, 4];
var newArr = [];

function addSeven(arr) {
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i] + 7);
    }
    return newArr;
}

addSeven(arr);
console.log(arr, newArr);

// Reverse Array
var arr = [1, 2, 3, 4];

function rvsArray(arr) {
    for (var i = 0; i < arr.length / 2; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

rvsArray(arr);
console.log(arr);

// Outlook: Negative
var arr = [-1, -2, -3, -4];

function outlookNegative(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] *= 1;
    }
    return arr;
}

outlookNegative(arr);
console.log(arr);

// Always Hungry
var arr = ["meat", "is", "good"];
var temp = false;

function alwaysHungry(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            console.log("yummy!");
        } else; {
            temp = true;
        }
    }
    if (temp = true) {
        console.log("I'm Hungry!")
    }
}

alwaysHungry(arr);

// Swap Toward the Center
var arr = [1, 2, 3, 4, 5, 6, 7];

function swapCenter(arr) {
    for (var i = 0; i < arr.length / 2; i += 2) {
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

swapCenter(arr);
console.log(arr);

// Scale the Array
var arr = [1, 2, 3, 4]
var num = 5

function scaleArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] *= num
    }
    return arr
}

scaleArray(arr)
console.log(arr)