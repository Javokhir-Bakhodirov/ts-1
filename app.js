"use strict";
// ----------1
// function humanYearsCatYearsDogYears(
//     humanYears: number
// ): [number, number, number] {
//     let catYears: number;
//     let dogYears: number;
//     if (humanYears === 1) {
//         catYears = 15;
//         dogYears = 15;
//     } else if (humanYears === 2) {
//         catYears = 15 + 9;
//         dogYears = 15 + 9;
//     } else {
//         catYears = 15 + 9 + (humanYears - 2) * 4;
//         dogYears = 15 + 9 + (humanYears - 2) * 5;
//     }
//     return [humanYears, catYears, dogYears];
// }
// console.log(humanYearsCatYearsDogYears());
// ----------2
// function getWeekday(num: number): string {
//     switch (num) {
//         case 1:
//             return "Sunday";
//         case 2:
//             return "Monday";
//         case 3:
//             return "Tuesday";
//         case 4:
//             return "Wednesday";
//         case 5:
//             return "Thursday";
//         case 6:
//             return "Friday";
//         case 7:
//             return "Saturday";
//         default:
//             return "Wrong, please enter a number between 1 and 7";
//     }
// }
// // Example usage:
// console.log(getWeekday(1));
// ----------3
// const expressionsMatter = (a: number, b: number, c: number): number =>
//     Math.max(
//         a + b + c,
//         a * b * c,
//         a + b * c,
//         (a + b) * c,
//         a * (b + c),
//         a * b + c
//     );
// // Example usage:
// console.log(expressionsMatter(1, 2, 3));
// ----------4
// function multiplyAndAdd(value: any): number | string {
//     if (typeof value === "number") {
//         return value * 50 + 6;
//     } else {
//         return "Error";
//     }
// }
// console.log(multiplyAndAdd(4));
// console.log(multiplyAndAdd("test"));
// // ----------5
// function double(str: string): string {
//     return str.split('').map(char => char + char).join('');
// }
// // Example usage:
// console.log(double(""));
// ----------6
// function DNAtoRNA(dna: string): string {
//     return dna.replace(/T/g, "U");
// }
// // Example usage:
// console.log(DNAtoRNA(""));
// ----------7
// function updateLight(lightColor: string): string {
//     switch (lightColor) {
//         case "green":
//             return "yellow";
//         case "yellow":
//             return "red";
//         case "red":
//             return "green";
//         default:
//             return "Invalid light state";
//     }
// }
// // Example usage:
// console.log(updateLight(""));
// ----------8
// function shortLongShort(a: string, b: string): string {
//     if (a.length < b.length) {
//         return a + b + a;
//     } else {
//         return b + a + b;
//     }
// }
// console.log(shortLongShort("", ""));
