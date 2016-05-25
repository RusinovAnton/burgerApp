function name(name) {
    if (typeof name === 'string') {
        return true;
    } else {
        throw new Error('name must be a string');
    }
}

function component(item, parentClass) {
    if (item instanceof parentClass) {
        return true;
    } else {
        throw new Error('The item you want to assign is not instance of '+ parentClass +' class');
    }
}

export { name, component }
