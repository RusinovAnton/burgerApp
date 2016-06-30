import Service from './Service';

class burgerComponentsService extends Service {
    constructor() {
        super();
    }

    getComponent(id) {

        let url = id ? '/api/component/' + id : '/api/component';

        return fetch(url)
            .then((res)=> {
                return res.json()
            })
            .then((data)=> {
                return data;
            });
    }

    addComponent(component) {

        let data = 'component=' + JSON.stringify(component);

        return fetch('api/component', {
            method: 'POST',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: data
        })
            .then((res)=> {
                if (res.status >= 200 && res.status < 400) return false;
                else {
                    return res.json()
                }
            })
            .then((err)=> {
                console.log(err);
            })
            .catch((err)=> {
                console.error(err);
            })
    }

    updateComponent(id, component) {

        let url = 'api/component/' + id;

        let data = 'component=' + JSON.stringify(component);

        return fetch(url, {
            method: 'PUT',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: data
        })
            .then((res)=> {
                console.log(res.status);
                if (res.status >= 200 && res.status < 400) return res.json();
                else {
                    return res.text();
                }
            })
            .catch((err)=> {
                console.error(err);
            })
    }

    deleteComponent(id) {
        let url = 'api/component/' + id;

        return fetch(url, {
            method: 'DELETE'
        })
            .then((res)=> {
                console.log(res.status);
                if (res.status >= 200 && res.status < 400) return res.json();
                else {
                    return res.text();
                }
            })
            .catch((err)=> {
                console.error(err);
            })
    }
}

export default new burgerComponentsService();
