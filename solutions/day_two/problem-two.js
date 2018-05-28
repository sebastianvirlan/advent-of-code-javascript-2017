/*
* Find the only two numbers in each row where one evenly divides the other - that is, where the result of the division
* operation is a whole number. They would like you to find those numbers on each line, divide them, and add up each
* line's result.

* For example, given the following spreadsheet:

* 5 9 2 8
* 9 4 7 3
* 3 8 6 5

* In the first row, the only two numbers that evenly divide are 8 and 2; the result of this division is 4.
* In the second row, the two numbers are 9 and 3; the result is 3.
* In the third row, the result is 2.
* In this example, the sum of the results would be 4 + 3 + 2 = 9.
 */

class ProblemTwo {

    constructor(input) {
        this.input = input.split(/\n+/).map(n => n.split(' ').map(Number));
    }

    resolve() {
        let eachRowDivided = this.input.map(row => this.constructor.permutation(row, 2).map(p => {
            if(p.reduce((a, b) => a % b) === 0)
                return p.reduce((a, b) => a / b)
        }));
        return [].concat(...eachRowDivided).filter(n => n).reduce((a, b) => a + b);
    }

    // https://codereview.stackexchange.com/a/111226
    static permutation(xs, r) {
        if (!r) return [];
        return xs.reduce((memo, cur, i) => {
            let others  = xs.slice(0,i).concat(xs.slice(i+1));
            let perms   = ProblemTwo.permutation(others, r-1);
            let newElms = !perms.length ? [[cur]] : perms.map((perm) => [cur].concat(perm));
            return memo.concat(newElms);
        }, []);
    }
}

module.exports = ProblemTwo;