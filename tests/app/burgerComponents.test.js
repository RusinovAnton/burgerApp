const should = require('chai').should();
const assert = require('chai').assert;

import BurgerComponent from '../../app/classes/components/BurgerComponent';
import { Size, Stuff, Top } from '../../app/classes/components/Components';

describe('Size', function () {
    it('should be instance of BurgerComponent', function () {
        assert.equal(new Size(15,20) instanceof BurgerComponent, true);
    });
    it('should validate input of cost, cal', function(){
            new Size();
            new Size(34);
            new Size(34, 'test');
            new Size('43234', 'test');
            new Size(234, -123);
            new Size('test', -123);
    });
});
describe('Stuff', function () {
    it('should be instance of BurgerComponent', function () {
        assert.equal(new Stuff(15,20) instanceof BurgerComponent, true);
    })
});

describe('Top', function () {
    it('should be instance of BurgerComponent', function () {
        assert.equal(new Top(15,20) instanceof BurgerComponent, true);
    })
});
