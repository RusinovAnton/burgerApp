var equal = require('chai').assert.equal;
var expect = require('chai').expect;

import { BurgerComponent } from '../../app/classes/burger/BurgerComponent';

describe('BurgerComponent', function () {
    it('should take (name, params) as params', () => {
        expect(()=> {
            new BurgerComponent('size', {
                name: 'large',
                cal: 20,
                cost: 25
            })
        }).to.not.throw(Error);
    });
    it('should validate input params', ()=>{
        expect(()=>{
            new BurgerComponent();
        }).to.throw(Error);
        expect(()=>{
            new BurgerComponent(123,123);
        }).to.throw(Error);
        expect(()=>{
            new BurgerComponent('size',345);
        }).to.throw(Error);
        expect(()=>{
            new BurgerComponent('stuff', {});
        }).to.throw(Error);
        //expect(()=>{
        //    new BurgerComponent('invalid', {
        //        cal: 20,
        //        cost: 20,
        //        name: 'invalid',
        //    });
        //}).to.throw(Error);
    });
    it('should create object { name: String, cal: Number, cost: Number, type: String, machineName: String }', function(){
        let mockBurgerComponent = new BurgerComponent('size',{
            name: 'Test',
            cost: 25,
            cal: 20
        });
        equal(mockBurgerComponent.cal, 20);
        equal(mockBurgerComponent.cost, 25);
        equal(mockBurgerComponent.name, 'Test');
        equal(mockBurgerComponent.type, 'SIZE');
        equal(mockBurgerComponent.machineName, 'SIZE_TEST');
    });
});

