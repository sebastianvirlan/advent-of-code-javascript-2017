let expect      = require('chai').expect;
let ProblemTwo  = require('../../solutions/day_two/problem-two');

describe('For each line there are only two numbers in each row where one evenly divides the other on each line,' +
    'divide them, and add up each line\'s result', () =>{
    let input = `5 9 2 8
9 4 7 3
3 8 6 5`;
    it(`returns 9 for input ${input.replace(/\n+/g, '/')}`, () => {
        let result = new ProblemTwo(input).resolve();
        expect(result).to.be.eql(9);
    });
});