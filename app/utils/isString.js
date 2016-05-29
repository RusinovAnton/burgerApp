import isDefined from './isDefined';

export default function isString(string, length) {
    if (typeof string === 'string') {
        if (!isDefined(length)) {
            return true;
        } else {
            return string.length <= length;
        }
    }
    return false;
}
