let expect      = require('chai').expect;
let ProblemTwo  = require('../../solutions/day_four/problem-two');

describe('Number of valid passphrases that contain no two words that are anagrams', () =>{
    let input = `abcde fghij
abcde xyz ecdab
a ab abc abd abf abj
iiii oiii ooii oooi oooo
oiii ioii iioi iiio`;

    it(`returns 3 for input ${input.replace(/\n+/g, '/')}`, () => {
        let result = new ProblemTwo(input).resolve();
        expect(result).to.be.eql(3);
    });
});