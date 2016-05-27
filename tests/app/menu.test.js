const assert = require('chai').assert;
const expect = require('chai').expect;


import Menu from '../../app/classes/Menu';
import BurgerComponent from '../../app/classes/components/BurgerComponent';
import { Size, Stuff, Top } from '../../app/classes/components/Components';

import { size as _size } from 'lodash';

var mockMenu = new Menu();

describe('Menu', function () {
    it('has to be constructor function', function () {
        expect(()=>{new Menu()}).to.not.throw(Error)
    });
    describe('addSize()', function () {
        it('should validate arguments', function () {
            expect(()=>{mockMenu.addSize()}).to.throw(Error);
            expect(()=>{mockMenu.addSize(1024, new Size(13, 37));}).to.throw(Error);
            expect(()=>{mockMenu.addSize('test', {cost: 123, cal: 12})}).to.throw(Error);
        });
        it('is ok if item object\'s name is a string an instance of Size', function () {
            expect(()=>{mockMenu.addSize('test', new Size(20, 30));}).to.not.throw(Error);
            expect(mockMenu.items.size.test).to.not.be.undefined;
        });
    });
    describe('addStuff()', function () {
        it('should validate arguments', function () {
            expect(()=>{mockMenu.addStuff()}).to.throw(Error);
            expect(()=>{mockMenu.addStuff(1024, new Stuff(13, 37))}).to.throw(Error);
            expect(()=>{mockMenu.addStuff('test', {cost: 123, cal: 12})}).to.throw(Error);
        });
        it('is ok if item object\'s name is a string an instance of Stuff', function () {
            expect(()=>{ mockMenu.addStuff('test', new Stuff(20, 30))}).to.not.throw(Error);
            expect(mockMenu.items.stuff.test).to.not.be.undefined;
        });
    });
    describe('addTop()', function () {
        it('should validate arguments', function () {
            expect(()=>{mockMenu.addTop();}).to.throw(Error);
            expect(()=>{mockMenu.addTop(1024, new Top(13, 37));}).to.throw(Error);
            expect(()=>{mockMenu.addTop('test', {cost: 123, cal: 12})}).to.throw(Error);
        });
        it('is ok if item object\'s name is a string an instance of Top', function () {
            expect(()=>{mockMenu.addTop('test', new Top(20, 30));}).to.not.throw(Error);
            expect(mockMenu.items.top.test).to.not.be.undefined;
        });
    });
    describe('removeItem(type, name)', function(){
        it('should throw Error if there is no such item in the menu', function(){
            let mockMenu = new Menu();
            mockMenu.addSize('testSize', new Size(10,10));
            expect(()=>{mockMenu.removeItem('size', 'testSizee')}).to.throw(Error);
        });
        it('should remove existing menu item', function(){
            let mockMenu = new Menu();
            mockMenu.addSize('testSize', new Size(10,10));
            expect(mockMenu.items.size.testsize).to.not.be.undefined;
            mockMenu.removeItem('size', 'testSize');
            expect(mockMenu.items.size.testsize).to.be.undefined;
        });
    });
    describe('menuList() getter', function () {
        it('must return object', function () {
            assert.typeOf(mockMenu.menuList, 'object');
        });
        it('must have 3 own properties in it', function () {
            assert.equal(_size(mockMenu.menuList), 3);
        });
        it('must has size, stuff, top items with cost: 20 and cal: 30', function () {
            assert.typeOf(mockMenu.menuList, 'object');
        });
    });
});

