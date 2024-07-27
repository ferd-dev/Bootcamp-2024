type Props = {
    chair: {
        name: string,
        status: boolean
    },
    reserveChair: (chairName: string) => void
}

function Chair({ chair, reserveChair }: Props) {
    return (
        <div
            className={`chair ${chair.status ? 'green' : 'red'}`}
            onClick={() => reserveChair(chair.name)}
        >
            <div className="label">{chair.name}</div>
        </div>
    )
}

export default Chair;