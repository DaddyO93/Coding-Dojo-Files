/* odds */
// for (var i = 1; i <= 20; i++) {
//     if (i % 2 != 0) {
//         console.log(i);
//     }
// }

/* sum and print */
var sum = 0;
for (var i = 1; i <= 5; i++) {
    console.log("num" + i);
    console.log("sum" + (i + sum));
    sum = i + sum;
}