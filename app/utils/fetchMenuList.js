export default function fetchMenuList(){
    return new Promise(function(resolve, reject){
        fetch('/api/getMenuList')
            .then((res)=>{
                res.json().then(
                    (data) => {
                        if (typeof data.items !== 'undefined') resolve(data.items);
                        else {reject(new Error('there is no items on data obj'))}
                    }
                )
            })
            .catch((e) => {
                console.log(e);
                reject();
            });
    });
}
