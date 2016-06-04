import random from './random';

/**
 * unique id generator
 * @param {number} length
 * @returns {string}
 */
export default function(length) {
    length = length > 5 ? length : 5;
    let uniqid = ['_'];
    let i = 0;

    for (i;i<length; i++) {
        if (i<2) {
            uniqid.push(String.fromCharCode(random(65, 90)));
        } else {
            uniqid.push(String.fromCharCode(random(48, 57)));
        }
        console.log(uniqid)
    }

    return uniqid.join('');
}
