var assert = require('chai').assert;
var expect = require('chai').expect;

import Burger from '../../app/classes/Burger';
import BurgerComponent from '../../app/classes/BurgerComponent';

var burgerComponents = {
    size: new BurgerComponent('size', {
        name: 'larger',
        cost: 20,
        cal: 15
    }),
    stuff: [
        new BurgerComponent('stuff', {
            name: 'cheese',
            cost: 20,
            cal: 25
        })
    ],
    topp: [new BurgerComponent('topp', {
        name: 'mayo',
        cost: 26,
        cal: 30
    }),
        new BurgerComponent('topp', {
            name: 'sauce',
            cost: 26,
            cal: 30
        })]
}

describe('Burger', function () {
    it('should take (name, params) as parameters and return a Burger object', function () {

        expect(()=> {
            new Burger('FizzBuzzrger', burgerComponents)
        }).to.not.throw(Error);
        assert.equal(new Burger('mockBurger', burgerComponents) instanceof Burger, true);

    })
    it('should validate input args', function (arg, anotherone) {
        console.log(arg());
        expect(()=> {
            new Burger()
        }).to.throw(Error);
        expect(()=> {
            new Burger({}, {})
        }).to.throw(Error);
        expect(()=> {
            new Burger('trset', {size: {cal: 20, cost: 20}})
        }).to.throw(Error);
        expect(()=> {
            new Burger(123, {})
        }).to.throw(Error);
        expect(()=> {
            new Burger('test', {})
        }).to.throw(Error);
    });
    it('should have setters and getters for its\' components', function () {
        var mockBurgerino = new Burger('Yumm', burgerComponents);

        assert.equal(mockBurgerino.name, 'Yumm');
        assert.equal(mockBurgerino.size.name, burgerComponents.size.name);
        assert.equal(mockBurgerino.stuff.length, burgerComponents.stuff.length);
        assert.equal(mockBurgerino.topp.length, burgerComponents.topp.length);
    })
});
