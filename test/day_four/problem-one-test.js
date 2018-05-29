let expect      = require('chai').expect;
let ProblemOne  = require('../../solutions/day_four/problem-one');

describe('Number of valid passphrases that doesn\'t contain duplicate words', () =>{
    let input = `aa bb cc dd ee
aa bb cc dd aa
aa bb cc dd aaa`;

    it(`returns 2 for input ${input.replace(/\n+/g, '/')}`, () => {
        let result = new ProblemOne(input).resolve();
        expect(result).to.be.eql(2);
    });
});