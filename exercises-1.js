const exaple = [1, 2, 4, 7, 4, 2, 1, 7];

const elementNotRepeating = (arr) => {
    const dataAux = {};

    for (let value in arr) {
        if (!dataAux[arr[value]]) {
            dataAux[arr[value]] = 1;
        } else {
            dataAux[arr[value]]++;
        }
    }

    console.log(dataAux);

    for (let key in dataAux) {
        if (dataAux[key] === 1) {
            return key;
        }
    }

    return 'No hay elemetos que no se repitan';
};

console.log(elementNotRepeating(exaple));