export default function hasValuesFromArray (arr){
    const newSet = new Set(arr);
    if (arr.length === newSet.length) {return true;}
    return false;

}