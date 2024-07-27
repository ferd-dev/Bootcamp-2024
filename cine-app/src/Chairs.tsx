import { useState } from 'react'
import './App.css'
import Chair from './Chair'

type Props = {
    coloumn: number,
    row: number
}

type Chair = {
    name: string,
    status: boolean
}

function Chairs({ coloumn, row }: Props) {

    const [chairs, setChairs] = useState<Chair[][]>(() => {
        const newChairs = [];
        const abs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (let rowIndex = 0; rowIndex < row; rowIndex++) {
            const rowArray = [];
            for (let colIndex = 0; colIndex < coloumn; colIndex++) {
                rowArray.push({
                    name: `${abs[rowIndex]}${colIndex}`,
                    status: true,
                });
            }
            newChairs.push(rowArray);
        }
        return newChairs;
    });

    const reserveChair = (chairName: string) => {
        const newChairs = chairs.map(row => row.map(chair => {
            if (chair.name === chairName) {
                return {
                    ...chair,
                    status: !chair.status
                }
            }
            return chair;
        }));
        setChairs(newChairs);
    }

    return (
        <div className="container">
            {chairs.map((row) => (
                row.map((chair, chairIndex) => (
                    <Chair
                        key={chairIndex}
                        chair={chair}
                        reserveChair={reserveChair}
                    />
                ))
            ))}
        </div>
    )
}

export default Chairs;