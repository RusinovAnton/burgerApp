export default function isChildOf(item, parentClass) {
    if (item instanceof parentClass) {
        return true;
    }
    return false;
}
