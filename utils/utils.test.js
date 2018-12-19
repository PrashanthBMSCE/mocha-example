const expect = require('expect');

const utils = require("./utils");

describe('Utils', () => {
    describe('#add', () => {
        it('should add two numbers', () => {
            var res = utils.add(5, 2);
            expect(res).toBe(7).toBeA('number');

        })
    })




    it('should return square', () => {
        var res = utils.square(5);

        expect(res).toBe(25).toBeA('number')
    })

    it('should set firstName and lastName', () => {
        var user = utils.setName({}, 'prashant reddy');
        expect(user).toEqual({ firstName: 'prashant', lastName: 'reddy' });
    })
})

//testing asynchronous function

it('should call asyncAdd', (done) => {
    utils.asyncAdd(5, 2, function (res) {
        expect(res).toBe(7).toBeA('number');
        done()
    })
})

it('should async square', (done) => {
    utils.asyncSquare(5, function (res) {
        expect(res).toBe(25).toBeA('number');
        done()
    })
})