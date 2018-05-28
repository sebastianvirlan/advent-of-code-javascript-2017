/*
* Review a sequence of digits and find the sum of all digits that match the next digit in the list.
* The list is circular, so the digit after the last digit is the first digit in the list.

* For example:

* 1122 produces a sum of 3 (1 + 2) because the first digit (1) matches the second digit and the third digit (2) matches
* the fourth digit.
* 1111 produces 4 because each digit (all 1) matches the next.
* 1234 produces 0 because no digit matches the next.
* 91212129 produces 9 because the only digit that matches the next one is the last digit, 9.
*/


class ProblemOne {

    constructor(input) {
        this.input      = input.split('').map(Number);
        this.matches    = [];
    }

    resolve() {
        this.input.forEach((v, k) => {
            if (v === this.input[k + 1])
                this.matches.push(v);
        });

        if(this.input.slice(-1)[0] === this.input[0])
            this.matches.push(this.input[0]);

        return this.matches.reduce((a,b) => a + b, 0);
    }
}

module.exports = ProblemOne;