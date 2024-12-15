class Seat {
    #isAvailable
    constructor() {
        this.#isAvailable = false;
    }
    reserve() {
        this.#isAvailable = true;
    }
    getIsAvailable() {
        return this.#isAvailable;
    }
}

class Cinema {
    #seats = [];
    constructor(columns, rows) {
        for (let i = 0; i < columns; i++) {
            const row = [];
            for (let j = 0; j < rows; j++) {
                row.push(new Seat());
            }
            this.#seats.push(row);
        }
    }

    reserve(column, row) {
        if (this.#seats[column][row].getIsAvailable()) return console.log('Asiento no disponible');
        this.#seats[column][row].reserve();
        console.log('Asiento reservado');
    }

    showCine() {
        const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

        for (let i = 0; i < this.#seats.length; i++) {
            let row = '';
            for (let j = 0; j < this.#seats[i].length; j++) {
                let value = this.#seats[i][j].getIsAvailable() ? 'X' : 'O';
                row += `|${abc[i]}${j} - ${value}| `;
            }
            console.log(row);
        }
    }
}

const cine = new Cinema(5, 5);
cine.showCine()
cine.reserve(2, 2);
cine.showCine()
cine.reserve(2, 2);