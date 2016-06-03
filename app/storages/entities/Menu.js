import { BurgerComponent } from './burger/BurgerComponent';
import { size } from 'lodash';

const config = require('Config');

class Menu {

    constructor(getUrl) {
        this.urls = {
            get: getUrl || config.menuList.GET
        }
    }

    removeItem(type, name) {
        name = name.toLowerCase();
        if (typeof this.items[type][name] !== 'undefined') delete this.items[type][name];
        else {
            throw new Error('There is not such item in the menu object');
        }
    }

    importMenu(menuObj) {
        console.log(menuObj);
    }

    exportMenu() {
        return this.items;
    }

    fetch() {
        let _this = this;
        return new Promise(function (resolve, reject) {
            fetch(this.urls.get)
                .then(function(response){
                    if (response.headers.get('Content-Type').match(/json/)) { return response.json().then((data)=>{resolve(data)})}
                    if (response.headers.get('Content-Type').match(/text/)) { return response.text().then((data)=>{resolve(JSON.parse(data))})}
                })
                .then(function (menuList) {

                    if (size(menuList.items) <= 0) {
                        throw new Error('menu object is empty');
                    }


                    resolve(menuList.items);

                })
                .catch((e) => {
                    console.log(e);
                    reject(e);
                })

        })
    }

    init() {
        this.fetch()
            .then(function(menuObj){
                console.log(menuObj);
            });
    }

}

export default Menu;
