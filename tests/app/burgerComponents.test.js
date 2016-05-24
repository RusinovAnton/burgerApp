const should = require('chai').should();
const assert = require('chai').assert;

import BurgerComponent from '../../app/classes/components/BurgerComponent';
import { Size, Stuff, Top } from '../../app/classes/components/Components';

describe('Size', function () {
    it('should be instance of BurgerComponent', function () {
        assert.equal(new Size() instanceof BurgerComponent, true);
    })
});

describe('Stuff', function () {
    it('should be instance of BurgerComponent', function () {
        assert.equal(new Stuff() instanceof BurgerComponent, true);
    })
});

describe('Top', function () {
    it('should be instance of BurgerComponent', function () {
        assert.equal(new Top() instanceof BurgerComponent, true);
    })
});
