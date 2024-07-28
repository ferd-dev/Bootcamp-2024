import './image.css';

type Props = {
    id: number;
    name: string;
}

function Image({ id, name }: Props) {
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

    return (
        <div className="image">
            <img src={url} alt={name} />
        </div>
    );
}

export default Image;