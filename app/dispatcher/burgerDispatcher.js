import Dispatcher from './dispatcher';
import Store from '../storages/burger.storage';

const BurgerDispatcher = new Dispatcher();

BurgerDispatcher.register(function(action){
    switch(action.type) {
        case 'ADD':
            Store.addBurger(action.body.name, action.body.components);
            break;
        case 'REMOVE':
            Store.removeBurger(action.body.id);
            break;
        default:
        //
    }
});

export default BurgerDispatcher;
