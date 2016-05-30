import { toArray, isArray, isNumber } from 'lodash';

/**
 * Deeply iterates over collection and sums up values of given key;
 * @param key
 * @param collection
 * @returns {number}
 */

export default function summarize(key, collection) {
    let sum = 0;
    toArray(collection).forEach(function(el) {
        if (isNumber(el[key])) sum += el[key];
        if (isArray(el)) {
            sum += summarize(key, el);
        }
    });
    return sum;
}
