export default function isBurgerComponent(type){
    type = type.toUpperCase();
    //TODO: unhardcode it
    if (type === 'SIZE' || type === 'STUFF' || type === 'TOPP')
    return true;
}
