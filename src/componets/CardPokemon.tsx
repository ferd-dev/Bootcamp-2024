import { useEffect, useState } from 'react';
import './cardPokemon.css';
import Image from './Image';
import Information from './Information';
import TypePokemon from './TypePokemon';

type DataPokemon = {
    id: number;
    name: string;
    type: string;
}

function CardPokemon({ pokemon }: any) {
    const [dataPokemon, setDataPokemon] = useState<DataPokemon>();

    useEffect(() => {
        const url = pokemon.url;
        const data = async () => {
            const response = await fetch(url);
            const pokemon = await response.json();
            const data = {
                id: pokemon.id,
                name: pokemon.name,
                type: pokemon.types[0].type.name
            }
            setDataPokemon(data);
        }
        data();
    }, []);

    if (!dataPokemon) {
        return (
            <div className="card-loading">
                Loading ...
            </div>
        );
    }

    return (
        <div className="card">
            <div className="info">
                <Information id={dataPokemon.id} name={dataPokemon.name} />
                <TypePokemon type={dataPokemon.type} />
            </div>
            <Image id={dataPokemon.id} name={dataPokemon.name} />
        </div>
    );
}

export default CardPokemon;