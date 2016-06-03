import Dispatcher from '../dispatcher';

const BurgerDispatcher = new Dispatcher();

BurgerDispatcher.register(function(action){
    console.log(action.type);
});

export default burgerActions = {
    labelClick(className) {
        BurgerDispatcher.dispatch({
            type: CalculatorConstants.KEY_TYPED,
            className
        });
    }
};
