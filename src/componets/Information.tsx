import './information.css';

type Props = {
    id: number;
    name: string;
}

function Information({ id, name }: Props) {
    const formatId = (id: number) => {
        return '#' + id.toString().padStart(3, '0');
    }
    return (
        <>
            <div className="id">{formatId(id)}</div>
            <div className="name">{name}</div>
        </>
    );
}

export default Information;