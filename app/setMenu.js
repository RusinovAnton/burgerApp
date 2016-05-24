import Menu from './classes/Menu';
import { Size, Stuff, Top } from './classes/components/Components';

let menu = new Menu();

menu.addSize(   'small',    new Size(   15, 25));
menu.addSize(   'medium',   new Size(   20, 35));
menu.addSize(   'large',    new Size(   30, 45));
menu.addSize(   'xlarge',   new Size(   45, 60));

menu.addStuff(  'poultry',  new Stuff(  20, 30));
menu.addStuff(  'pork',     new Stuff(  25, 40));
menu.addStuff(  'beef',     new Stuff(  35, 45));
menu.addStuff(  'cheese',   new Stuff(  35, 45, 'ADD_STUFF'));
menu.addStuff(  'beef',     new Stuff(  35, 45, 'ADD_STUFF'));
menu.addStuff(  'beef',     new Stuff(  35, 45, 'ADD_STUFF'));

menu.addTop(    'mayo',     new Top(    5,  10));
menu.addTop(    'sauce',    new Top(    5,  0));

console.log(menu);

export default menu;
