let expect      = require('chai').expect;
let ProblemTwo  = require('../../solutions/day_one/problem-two');

describe('Sum all digits that match the digit halfway around the circular list', () =>{

    [
        ['1212', 6], ['1221', 0], ['123425', 4], ['123123', 12], ['12131415', 4]
    ].forEach((v) => {
        it(`returns ${v[1]} for ${v[0]}`, ()=>{
            let result = new ProblemTwo(v[0]).resolve();
            expect(result).to.be.equal(v[1]);
        })
    });
});