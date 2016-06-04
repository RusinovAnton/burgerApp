export default function(min, max) {
    max++;
    return Math.floor(Math.random() * (max - min) + min);
}
