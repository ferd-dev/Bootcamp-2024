const arr = [7, 9, 1, 'a', 'a', 'f', 9, 4, 2, 'd', 'd'];
const data = [
    ["The", "little", "horse"],
    ["Plane", "over", "the", "ocean"],
    ["Chocolate", "ice", "cream", "is", "awesome"],
    ["this", "is", "a", "long", "sentence"]
];

const removeDuplicates = (arr) => arr.filter((item, index) => arr.indexOf(item) === index);

const concatArrays = (data) => data.map(innerArray => innerArray.join(' '));

console.log(removeDuplicates(arr));
console.log(concatArrays(data));