export default function cleanSet(set, startString) {
    // Check for valid startString
    if (!startString || typeof startString !== 'string') {
        return '';
    }

    // Check that set is indeed a Set
    if (!(set instanceof Set)) {
        return '';
    }

    const result = [];

    // Iterate through set and add the sliced strings to result
    for (const item of set) {
        if (typeof item === 'string' && item.startsWith(startString)) {
            result.push(item.slice(startString.length));
        }
    }

    // Join the result with dashes and return the string
    return result.join('-');
}
