export default function cleanSet (set, startString) {
    if (!String) {
        return '';}

    const result = [];

    for (const item of set) {
        if (item.startsWith(startString)) {
            result.push(item.slice(startString.length));
        }
    }
    return result.join('-');
}