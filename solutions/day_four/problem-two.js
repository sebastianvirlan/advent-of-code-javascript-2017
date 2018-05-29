/*
* A valid passphrase must contain no two words that are anagrams of each other - that is,
* a passphrase is invalid if any word's letters can be rearranged to form any other word in the passphrase.

* For example:

* abcde fghij is a valid passphrase.
* abcde xyz ecdab is not valid - the letters from the third word can be rearranged to form the first word.
* a ab abc abd abf abj is a valid passphrase, because all letters need to be used when forming another word.
* iiii oiii ooii oooi oooo is valid.
* oiii ioii iioi iiio is not valid - any of these words can be rearranged to form any other word.

* Return the number of valid passphrases
 */

let ProblemOne  = require('./problem-one');

class ProblemTwo extends ProblemOne {

    constructor(input) {
        super(input);
        this.input = input.split(/\n+/).map(r => r.split(' ').map(word => {
            return word.split('').sort().join('');
        }));
    }
}

module.exports = ProblemTwo;