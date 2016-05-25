const should = require('chai').should();
const assert = require('chai').assert;

import BurgerComponent from '../../app/classes/components/BurgerComponent';
import { Size, Stuff, Top } from '../../app/classes/components/Components';

describe('Size', function () {
    it('should be instance of BurgerComponent', function () {
        assert.equal(new Size(15,20) instanceof BurgerComponent, true);
    });
    it('should validate input of cost, cal', function(){
            try { new Size(); } catch(e) {should.exist(e)}
            try { new Size(34); } catch(e) {should.exist(e)}
            try { new Size(34, 'test'); } catch(e) {should.exist(e)}
            try { new Size('43234', 'test'); } catch(e) {should.exist(e)}
            try { new Size(234, -123); } catch(e) {should.exist(e)}
            try { new Size('test', -123); } catch(e) {should.exist(e)}
    });
    it('should take two positive numbers as arguments', function(){
        new Size(20,20);
        new Size(20,20.32);
    })
});
describe('Stuff', function () {
    it('should be instance of BurgerComponent', function () {
        assert.equal(new Stuff(15,20) instanceof BurgerComponent, true);
    });
    it('should validate input of cost, cal', function(){
        try { new Stuff(); } catch(e) {should.exist(e)}
        try { new Stuff(34); } catch(e) {should.exist(e)}
        try { new Stuff(34, 'test'); } catch(e) {should.exist(e)}
        try { new Stuff('43234', 'test'); } catch(e) {should.exist(e)}
        try { new Stuff(234, -123); } catch(e) {should.exist(e)}
        try { new Stuff('test', -123); } catch(e) {should.exist(e)}
    });
    it('should take two positive numbers as arguments', function(){
        new Stuff(20,20);
        new Stuff(20,20.32);
    })
});
describe('Top', function () {
    it('should be instance of BurgerComponent', function () {
        assert.equal(new Top(15,20) instanceof BurgerComponent, true);
    });
    it('should validate input of cost, cal', function(){
        try { new Top(); } catch(e) {should.exist(e)}
        try { new Top(34); } catch(e) {should.exist(e)}
        try { new Top(34, 'test'); } catch(e) {should.exist(e)}
        try { new Top('43234', 'test'); } catch(e) {should.exist(e)}
        try { new Top(234, -123); } catch(e) {should.exist(e)}
        try { new Top('test', -123); } catch(e) {should.exist(e)}
    });
    it('should take two positive numbers as arguments', function(){
        new Top(20,20);
        new Top(20,20.32);
    })
});
