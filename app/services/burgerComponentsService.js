import Service from './Service';

class burgerComponentsService extends Service {
    constructor() {
        super();
        this._components = [
            {
                name: 'mayo',
                type: 'topping',
                color: '#f0eeb9',
                cost: 20,
                callories: 130
            },
            {
                name: 'sauce',
                type: 'topping',
                color: '#c98973',
                cost: 15,
                callories: 2
            },
            {
                name: 'tomato',
                type: 'stuff',
                color: '#f96244',
                cost: 35,
                callories: 67
            },
            {
                name: 'onion',
                type: 'stuff',
                color: '#f7f2e8',
                cost: 25,
                callories: 45
            },

            {
                name: 'poultry',
                type: 'stuff',
                color: '#69280b',
                cost: 100,
                callories: 250
            },
            {
                name: 'beef',
                type: 'stuff',
                color: '#431b1c',
                cost: 100,
                callories: 250
            },
            {
                name: 'pork',
                type: 'stuff',
                color: '#611715',
                cost: 130,
                callories: 270
            },
            {
                name: 'salad',
                type: 'stuff',
                color: '#b2c33e',
                cost: 45,
                callories: 20
            },
            {
                name: 'cheese',
                type: 'stuff',
                color: '#f3d39a',
                cost: 45,
                callories: 20
            },
            {
                name: 'bun',
                type: 'stuff',
                color: '#f5af62',
                cost: 45,
                callories: 20
            },
            {
                name: 'black bun',
                type: 'stuff',
                color: '#1c1512',
                cost: 45,
                callories: 20
            }
        ];
    }

    getComponents(query) {
        return fetch('/api/components_list')
            .then((res)=> {
                return res.json()
            })
            .then((data)=> {
                return data;
            });
    }

    addComponent(component) {

        this._components.push(component);

        let data = 'component=' + JSON.stringify(component);

        return fetch('api/component', {
            method: 'POST',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: data
        })
            .then((res)=> {
                if (res.status >= 200 &&  res.status < 400) return false;
                else {
                    return res.json()
                }
            })
            .then((err)=>{
                console.log(err);
            })
            .catch((err)=>{
                console.error(err);
            })
    }

}

let service = new burgerComponentsService();

export default service;
