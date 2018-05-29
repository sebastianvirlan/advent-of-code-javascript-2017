/*
* A valid passphrase must contain no duplicate words.

* For example:

* aa bb cc dd ee is valid.
* aa bb cc dd aa is not valid - the word aa appears more than once.
* aa bb cc dd aaa is valid - aa and aaa count as different words.
* The system's full passphrase list is available as your puzzle input.

* Return the number of valid passphrases
*/

class ProblemOne {

    constructor(input) {
        this.input = input.split(/\n+/).map(r => r.split(' '));
    }

    resolve() {
        return this.input.filter(row => this.constructor.getArrUniqValues(row).length === row.length).length;
    }
    
    static getArrUniqValues(arr) {
        return arr.filter((item, i, ar) => ar.indexOf(item) === i);
    }
}

module.exports = ProblemOne;