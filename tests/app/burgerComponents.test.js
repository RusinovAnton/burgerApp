import { assert, expect } from 'chai';

import { BurgerComponent } from '../../app/storages/entities/burger/BurgerComponent';

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
        assert.equal(mockBurgerComponent.cal, 20);
        assert.equal(mockBurgerComponent.cost, 25);
        assert.equal(mockBurgerComponent.name, 'Test');
        assert.equal(mockBurgerComponent.type, 'SIZE');
        assert.equal(mockBurgerComponent.machineName, 'SIZE_TEST');
    });
});

