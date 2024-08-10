type Props = {
    title: string;
    isActive: boolean;
    onShow: () => void;
    children: React.ReactNode;
}

function Panel({ title, isActive, onShow, children }: Props) {
    return (
        <div className={`panel ${isActive ? 'active' : ''}`}>
            <h3>{title}</h3>
            {!isActive && <button onClick={onShow}>Show</button>}
            {isActive && <p>{children}</p>}
        </div>
    );
}

export default Panel;