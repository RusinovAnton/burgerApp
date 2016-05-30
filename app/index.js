import BurgerComponent from './classes/burger/BurgerComponent';
import Menu from './classes/Menu';

new Menu().fetch().then(function(items) {
    console.log(items);
});

console.log('meow!');
