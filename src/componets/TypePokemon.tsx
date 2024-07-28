import './typePokemon.css'
type Props = {
    type: string;
}

function TypePokemon({ type }: Props) {
    return (
        <div className="type">
            <div className="type-label">{type}</div>
        </div>
    );
}

export default TypePokemon;