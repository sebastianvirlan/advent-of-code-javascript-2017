/*
* Consider a spreadsheet of rows of apparently-random numbers. To make sure the recovery process is on the right track,
* they need you to calculate the spreadsheet's checksum. For each row, determine the difference between the largest
* value and the smallest value; the checksum is the sum of all of these differences.

* For example, given the following spreadsheet:

* 5 1 9 5
* 7 5 3
* 2 4 6 8

* The first row's largest and smallest values are 9 and 1, and their difference is 8.
* The second row's largest and smallest values are 7 and 3, and their difference is 4.
* The third row's difference is 6.
* In this example, the spreadsheet's checksum would be 8 + 4 + 6 = 18.
*/

class ProblemOne {

    constructor(input) {
        this.input = input.split(/\n+/).map(n => n.split(' ').map(Number));
    }

    resolve() {
        return this.input.map(row => Math.max(...row) - Math.min(...row)).reduce((a, b) => a + b, 0);
    }
}

module.exports = ProblemOne;