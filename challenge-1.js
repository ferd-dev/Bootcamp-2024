const arr = [12, 6, 10, 2, 45, 100];
const arr2 = [3, 'c', 'c', 'a', 2, 3, 'c', 3, 'c', 2, 4, 9, 9];

const findSmallestNumber = (arr) => Math.min(...arr);

const findLeastFrequentItem = (arr) => {
    const references = {};
    arr.forEach(element => {
        if (references[element]) {
            references[element]++;
        } else {
            references[element] = 1;
        }
    });

    let counter = 0;
    let valueMin = 0;
    Object.keys(references).forEach(key => {
        if (counter === 0) {
            counter = references[key];
            valueMin = key;
        } else if (references[key] < counter) {
            counter = references[key];
            valueMin = key;
        }
    })

    return valueMin;
}

console.log(findSmallestNumber(arr));
console.log(findLeastFrequentItem(arr2));