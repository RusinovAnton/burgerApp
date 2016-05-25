const assert = require('chai').assert;
const expect = require('chai').expect;

import Burger from '../../app/classes/Burger';
import { Size, Stuff, Top } from '../../app/classes/components/Components';

const mockBurger = new Burger(new Size(25, 25), new Stuff(25, 25), new Top(25, 25));

describe('Burger', function () {
    describe('components', function () {
        describe('size', function () {
            it('is instance of Size', function () {
                expect(mockBurger).to.have.deep.property('components.size').that.an.instanceof(Size);
            });
            it('should have getter', function () {
                expect(mockBurger.size).to.be.instanceof(Size);
            });
            it('should have setter', function () {
                mockBurger.size = new Size(1337, 2337);
                expect(mockBurger.components.size).to.be.instanceof(Size);
                assert.equal(mockBurger.components.size.cost, 1337);
                assert.equal(mockBurger.components.size.cal, 2337);
            });
            it('setter size must only allow Size objects', function () {
                expect(()=> {
                    mockBurger.size = {a: 'foo', b: 'baz'};
                }).to.throw(Error);
            })
        });
        describe('stuff', function () {
            it('is instance of Array', function () {
                expect(mockBurger).to.have.deep.property('components.stuff').that.an.instanceof(Array);
            });
            it('should have getter', function () {
                expect(mockBurger.stuff).to.be.instanceof(Array);
            });
            it('should have setter', function () {
                let mockBurger = new Burger(new Size(5, 15), new Stuff(1337, 2337), new Top(20, 25));
                mockBurger.stuff = new Stuff(105, 125);
                console.log(mockBurger.stuff);
                mockBurger.stuff = [new Stuff(125, 135), new Stuff(233, 322)];
                console.log(mockBurger.stuff);
                expect(mockBurger.components.stuff).to.be.instanceof(Array);
                assert.equal(mockBurger.components.stuff[0].cost, 1337);
                assert.equal(mockBurger.components.stuff[0].cal, 2337);
                assert.equal(mockBurger.components.stuff[1].cost, 105);
                assert.equal(mockBurger.components.stuff[1].cal, 125);
                //assert.equal(mockBurger.components.stuff[3].cost, 233);
                //assert.equal(mockBurger.components.stuff[3].cal, 322);
            });
            it('setter stuff must only allow Stuff objects', function () {
                expect(()=> {
                    mockBurger.stuff = {a: 'foo', b: 'baz'};
                }).to.throw(Error);
            })
        });
        describe('top', function () {
            it('is instance of Array', function () {
                expect(mockBurger).to.have.deep.property('components.top').that.an.instanceof(Array);
            });
            it('should have getter', function () {
                expect(mockBurger.top).to.be.instanceof(Array);
            });
            it('should have setter', function () {
                let mockBurger = new Burger(new Size(5, 15), new Stuff(1337, 2337), new Top(20, 25));
                mockBurger.top = new Top(105, 125);
                expect(mockBurger.components.top).to.be.instanceof(Array);
                assert.equal(mockBurger.components.top[0].cost, 20);
                assert.equal(mockBurger.components.top[0].cal, 25);
                assert.equal(mockBurger.components.top[1].cost, 105);
                assert.equal(mockBurger.components.top[1].cal, 125);
            });
            it('setter top must only allow Top objects', function () {
                expect(()=> {
                    mockBurger.top = {a: 'foo', b: 'baz'};
                }).to.throw(Error);
            })
        });
    });
    describe('methods', function () {
        //describe('cost', function () {
        //    it('have to be getter that sums up cost of all components', function () {
        //        let mockBurger = new Burger()
        //    })
        //});
        //describe('cost', function () {
        //    it('have to be getter that sums up calories of all components', function () {
        //
        //    })
        //})
    })
});
