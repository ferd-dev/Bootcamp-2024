import { useEffect, useState } from "react";

const limit = 25;
const getUrl = (limit: number = 25, offset = 0) => `https://rapokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

type Pokemon = {
    name: string;
    url: string;
};

function fetchData(url: string) {
    return fetch(url)
        .then((response) => response.json())
        .then((data) => data);
}

export function usePokemon(offset: number = 0) {
    const [pokemons, setPokemon] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const url = getUrl(limit, offset);
        fetchData(url)
            .then((data) => {
                setPokemon(old => [...old, ...data.results]);
                setLoading(false);
            })
            .catch((error) => console.error(error));
    }, [offset]);

    return { pokemons, loading };
}
