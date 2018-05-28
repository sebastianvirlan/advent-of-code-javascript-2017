let expect      = require('chai').expect;
let ProblemOne  = require('../../solutions/day_one/problem_one');

describe('Sum of all digits that match the next digit in the list (circular)', () =>{
    [
        ['1122', 3], ['1111', 4], ['1234', 0], ['91212129', 9]
    ].forEach((v) => {
        it(`returns ${v[1]} for ${v[0]}`, ()=>{
            let result = new ProblemOne(v[0]).resolve();
            expect(result).to.be.equal(v[1]);
        })
    });
});