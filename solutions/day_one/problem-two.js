/*
* Review a sequence of digits and find the sum of all digits that match the digit halfway around
* the circular list. That is, if your list contains 10 items, only include a digit in your sum
* if the digit 10/2 = 5 steps forward matches it. Fortunately,
* your list has an even number of elements.

* For example:

* 1212 produces 6: the list contains 4 items, and all four digits match the digit 2 items ahead.
* 1221 produces 0, because every comparison is between a 1 and a 2.
* 123425 produces 4, because both 2s match each other, but no other digit has a match.
* 123123 produces 12.
* 12131415 produces 4.
* */


class ProblemTwo {

    constructor(input) {
        this.input = input.split('').map(Number);
    }

    resolve() {

        let halfLength  = Math.ceil(this.input.length / 2);
        let leftSide    = this.input.slice(0, halfLength);
        let rightSide   = this.input.slice(halfLength);

        return leftSide.filter((n, i) => n === rightSide[i]).reduce((a,b) => a + b, 0) * 2;
    }
}

module.exports = ProblemTwo;