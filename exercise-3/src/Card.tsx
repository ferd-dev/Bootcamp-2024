type CardProps = {
    id: number;
    text: string;
};

function Card({ text }: CardProps) {
    return (
        <div className="card">
            <h2>{text}</h2>
        </div>
    );
}

export default Card;