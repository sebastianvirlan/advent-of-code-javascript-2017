let expect      = require('chai').expect;
let ProblemOne  = require('../../solutions/day_two/problem-one');

describe('The difference determined for each row between the largest value and the smallest value; the checksum is ' +
    'the sum of all of these differences', () =>{
    let input = `5 1 9 5
7 5 3
2 4 6 8`;
    it(`returns 18 for input ${input.replace(/\n+/g, '/')}`, () => {
        let result = new ProblemOne(input).resolve();
        expect(result).to.be.eql(18);
    });
});