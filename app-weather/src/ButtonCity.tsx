type Props = {
    city: string;
    setCity: (city: string) => void;
}

function ButtonCity({ city, setCity }: Props) {
    return (
        <button
            className='button-history'
            onClick={() => setCity(city)}
        >
            {city}
        </button>
    );
}

export default ButtonCity;