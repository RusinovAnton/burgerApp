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

    });
    it('should validate input args', function () {
        expect(()=> {
            new Burger();
        }).to.throw(Error);
        expect(()=> {
            new Burger({}, {});
        }).to.throw(Error);
        expect(()=> {
            new Burger('trset', {size: {cal: 20, cost: 20}});
        }).to.throw(Error);
        expect(()=> {
            new Burger(123, {});
        }).to.throw(Error);
        expect(()=> {
            new Burger('test', {});
        }).to.throw(Error);
    });
    it('should have getters for its\' components', function () {
        var mockBurgerino = new Burger('Yumm', burgerComponents);

        assert.equal(mockBurgerino.name, 'Yumm');
        assert.equal(mockBurgerino.size.name, burgerComponents.size.name);
        assert.equal(mockBurgerino.stuff.length, burgerComponents.stuff.length);
        assert.equal(mockBurgerino.topp.length, burgerComponents.topp.length);

    });
    it('should have setters for it\'s components', function () {
        var mockBurgerino = new Burger('Yumm', burgerComponents);

        mockBurgerino.name = 'NOM!';
        mockBurgerino.size = new BurgerComponent('size', {name: 'xsmall', cost: 25, cal: 2444});
        mockBurgerino.stuff = [new BurgerComponent('stuff', {name: 'magic', cost: 123, cal: 321})];
        mockBurgerino.topp = [new BurgerComponent('topp', {name: 'top', cost: 333, cal: 444})];

        assert.equal(mockBurgerino.name, 'NOM!');
        assert.equal(mockBurgerino.size.name, 'xsmall');
        assert.equal(mockBurgerino.stuff.length, 1);
        assert.equal(mockBurgerino.stuff[0].name, 'magic');
        assert.equal(mockBurgerino.topp.length, 1);
        assert.equal(mockBurgerino.topp[0].cost, 333);
    });
    it('setters must throw Error on invalid input', function(){
        expect(()=>{ mockBurgerino.size = 1; }).to.throw(Error);
        expect(()=>{ mockBurgerino.stuff = 1; }).to.throw(Error);
        expect(()=>{ mockBurgerino.topp = 1; }).to.throw(Error);
        expect(()=>{ mockBurgerino.size = null; }).to.throw(Error);
        expect(()=>{ mockBurgerino.size = undefined; }).to.throw(Error);
    })
});
