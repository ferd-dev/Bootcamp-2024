type Props = {
    acction: () => void;
    title: string;
};

function MyButton({ acction, title }: Props) {
    return <>
        <button
            onClick={acction}>
            {title}
        </button>
    </>;
}

export default MyButton;