import BurgerDispatcher from '../dispatcher/burgerDispatcher';

const burgerActions = {
    addBurger(props){
        BurgerDispatcher.dispatch({
            type: 'ADD',
            body: {
                name: props.name,
                components: props.components
            }
        });
    },
    removeBurger(props){
        BurgerDispatcher.dispatch({
            type: 'REMOVE',
            body: {
                id: props.id
            }
        });
    }
};

export default burgerActions;
