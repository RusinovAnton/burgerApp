function name(name) {
    if (typeof name === 'string') {
        return true;
    }
    return false;
}

function number(number){
    if(typeof number === 'number') {
        return true
    }
    return false;
}

function component(item, parentClass) {
    if (item instanceof parentClass) {
        return true;
    }
    return false;
}

function componentType(type){
    //COMPONENT_TYPES
    return [
        'SIZE',
        'STUFF',
        'TOPP'
    ].indexOf(type.toUpperCase()) >= 0;
}

export {  component, componentType, name, number}
