// Question #1
var arr = [];

function question1() {
    for (var i = 1; i < 256; i++) {
        arr.push(i);
    }
}

question1();
console.log(arr);

// Question #2
var sum = 0;

function question2() {
    for (var i = 1; i < 1001; i++) {
        if (i % 2 == 0) {
            sum += i;
        }
    }
    return sum;
}

question2();
console.log(sum);

// Question #3
var sum = 0;

function question3() {
    for (var i = 1; i < 1001; i++) {
        if (i % 2 != 0) {
            sum += i;
        }
    }
    return sum;
}

question3();
console.log(sum);

// Question #4
var arr = [1, 2, 3, 4];
var sum = 0;

function question4() {
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
question4();
console.log(sum);

// Question #5
var arr = [1, 2, 3, 4];
var max = 0;

function question5() {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

question5();
console.log(max);

// Question #6
var arr = [1, 2, 3, 4];
var avg = 0;
var sum = 0;

function question6() {
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    avg = sum / arr.length;
    return avg;
}

question6();
console.log(avg);

// Question #7
var arr = [];

function question7() {
    for (var i = 1; i < 51; i++) {
        if (i % 2 != 0) {
            arr.push(i);
        }
    }
}

question7();
console.log(arr);

// Question #8
var y = 5;
var arr = [2, 4, 6, 8, 10];
var greater = 0;

function question8() {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            greater++;
        }
    }
    return greater;
}
question8();
console.log(greater);

// Question #9
var arr = [1, 2, 3, 4];

function question9() {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
}

question9();
console.log(arr);

// Question #10
var arr = [-1, -2, -3, -4];

function question10() {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
}

question10();
console.log(arr)

// Question #11
var arr = [1, 2, 3, 4];
var newArr = [];
var avg = 0;
var sum = 0;
var min;
var max;

function question11() {
    max = Math.max.apply(null, arr);
    min = Math.min.apply(null, arr);
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    avg = sum / arr.length;
    return (newArr.push(max, min, avg));
}

question11();
console.log(newArr);

// or-----

var arr = [1, 2, 3, 4];
var newArr = [];
var avg = 0;
var sum = 0;

function question11() {
    var min = arr[0];
    var max = arr[0];
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i] < min) {
            min = arr[i];
        } else if (arr[i] > max) {
            max = arr[i];
        }
    }
    avg = sum / arr.length;
    return (newArr.push(max, min, avg));
}

question11();
console.log(newArr);

// Question #12
var arr = [1, 2, 3, 4];

function question12() {
    var first = arr[0];
    var last = arr[(arr.length - 1)];
    arr[0] = last;
    arr[(arr.length - 1)] = first;
    console.log(arr);
}

question12();

// Question #13
var arr = [-1, -2, 3, 4];

function question13() {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = "Dojo";
        }
    }
}

question13();
console.log(arr);