const assert = require('chai').assert;
const expect = require('chai').expect;

import BurgerComponent from '../../app/classes/components/BurgerComponent';

describe('Size', function () {
    it('should be instance of BurgerComponent', function () {
        expect(new BurgerComponent('name', {cost:15,cal:25,type: 'size'})).to.be.instanceof(BurgerComponent);
    });
    it('should validate input of cost, cal', function(){
        expect(()=>{ new Size(); }).to.throw(Error);
        expect(()=>{ new Size(34); }).to.throw(Error);
        expect(()=>{ new Size(34, 'test'); }).to.throw(Error);
        expect(()=>{ new Size('43234', 'test'); }).to.throw(Error);
        expect(()=>{ new Size(234, -123); }).to.throw(Error);
        expect(()=>{ new Size('test', -123); }).to.throw(Error);
    });
    it('should take two positive numbers as arguments', function(){
        expect(()=>{new Size(20,20)}).to.not.throw(Error);
        expect(()=>{new Size(20,20.32)}).to.not.throw(Error);
    })
});
//describe('Stuff', function () {
//    it('should be instance of BurgerComponent', function () {
//        expect(new Stuff(15,20)).to.be.instanceof(BurgerComponent);
//    });
//    it('should validate input of cost, cal', function(){
//        expect(()=>{ new Stuff(); }).to.throw(Error);
//        expect(()=>{ new Stuff(34); }).to.throw(Error);
//        expect(()=>{ new Stuff(34, 'test'); }).to.throw(Error);
//        expect(()=>{ new Stuff('43234', 'test'); }).to.throw(Error);
//        expect(()=>{ new Stuff(234, -123); }).to.throw(Error);
//        expect(()=>{ new Stuff('test', -123); }).to.throw(Error);
//    });
//    it('should take two positive numbers as arguments', function(){
//        expect(()=>{new Stuff(20,20)}).to.not.throw(Error);
//        expect(()=>{new Stuff(20,20.32)}).to.not.throw(Error);
//    });
//    it('should take third optional parameter - type to change type of stuff', function(){
//        var testStuff = new Stuff(20,20,'ADD');
//        assert.equal(testStuff.type, 'ADD_STUFF');
//    })
//});
//describe('Top', function () {
//    it('should be instance of BurgerComponent', function () {
//        expect(new Top(15,20)).to.be.instanceof(BurgerComponent);
//    });
//    it('should validate input of cost, cal', function(){
//        expect(()=>{ new Top(); }).to.throw(Error);
//        expect(()=>{ new Top(34); }).to.throw(Error);
//        expect(()=>{ new Top(34, 'test'); }).to.throw(Error);
//        expect(()=>{ new Top('43234', 'test'); }).to.throw(Error);
//        expect(()=>{ new Top(234, -123); }).to.throw(Error);
//        expect(()=>{ new Top('test', -123); }).to.throw(Error);
//    });
//    it('should take two positive numbers as arguments', function(){
//        expect(()=>{new Top(20,20)}).to.not.throw(Error);
//        expect(()=>{new Top(20,20.32)}).to.not.throw(Error);
//    })
//});
