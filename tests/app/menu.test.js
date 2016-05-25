const should = require('chai').should();
const assert = require('chai').assert;

import Menu from '../../app/classes/Menu';
import BurgerComponent from '../../app/classes/components/BurgerComponent';
import { Size, Stuff, Top } from '../../app/classes/components/Components';

import { size as _size } from 'lodash';

var mockMenu = new Menu();

describe('Menu', function () {
    it('has to be constructor function', function () {
        try {
            new Menu();
        } catch (err) {
            should.not.exist(err);
        }
    });
    describe('addSize()', function () {
        it('should validate arguments', function () {
                try { mockMenu.addSize(); } catch(e) {should.exist(e)}
                try { mockMenu.addSize(1024, new Size(13, 37)); } catch(e) {should.exist(e)}
                try { mockMenu.addSize('test', {cost: 123, cal: 12}) } catch(e) {should.exist(e)}
        });
        it('is ok if item object\'s name is a string an instance of Size', function () {
            try { mockMenu.addSize('test', new Size(20, 30)); } catch(e) {should.not.exist(e)}
        });
    });
    describe('addStuff()', function () {
        it('should validate arguments', function () {
                try {mockMenu.addStuff(); } catch(e) {should.exist(e)}
                try {mockMenu.addStuff(1024, new Stuff(13, 37)); } catch(e) {should.exist(e)}
                try {mockMenu.addStuff('test', {cost: 123, cal: 12}) } catch(e) {should.exist(e)}
        });
        it('is ok if item object\'s name is a string an instance of Stuff', function () {
            try { mockMenu.addStuff('test', new Stuff(20, 30)); } catch (e) { should.not.exist(e); }
        });
    });
    describe('addTop()', function () {
        it('should validate arguments', function () {
                try { mockMenu.addTop(); }  catch(e) {should.exist(e)}
                try { mockMenu.addTop(1024, new Top(13, 37)); }  catch(e) {should.exist(e)}
                try { mockMenu.addTop('test', {cost: 123, cal: 12}) }  catch(e) {should.exist(e)}
        });
        it('is ok if item object\'s name is a string an instance of Top', function () {
            try { mockMenu.addTop('test', new Top(20, 30)); } catch (e) { should.not.exist(e); }
        });
    });
    describe('menuList() getter', function () {
        it('must return object', function () {
            assert.typeOf(mockMenu.menuList, 'object');
        });
        it('must have 3 own properties in it', function(){
            assert.equal(_size(mockMenu.menuList), 3);
        });
        it('must has size, stuff, top items with cost: 20 and cal: 30', function () {
            assert.typeOf(mockMenu.menuList, 'object');
        });
    });

});

