const assert = require('chai').assert;
const expect = require('chai').expect;

import Burger from '../../app/classes/Burger';
import { Size, Stuff, Top } from '../../app/classes/components/Components';

const mockBurger = new Burger(new Size(25,25), new Stuff(25,25), new Top(25,25));

describe('Burger', function(){
    describe('components', function(){
        describe('size', function(){
            it('is instance of Size', function(){
                expect(mockBurger).to.have.deep.property('components.size').that.an.instanceof(Size);
            });
            it('should have getter', function(){
                expect(mockBurger.size).to.be.instanceof(Size);
            });
            it('should have setter', function(){
                mockBurger.size = new Size(1337,2337);
                expect(mockBurger.components.size).to.be.instanceof(Size);
                assert.equal(mockBurger.components.size.cost, 1337);
                assert.equal(mockBurger.components.size.cal, 2337);
            });
        })
    })
});
