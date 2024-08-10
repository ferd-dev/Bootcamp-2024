import { useState } from "react";
import "./ToDo.css";

type Props = {
    isDone: boolean;
    title: string;
    onEdit: (text: string) => void;
    onDelete: () => void;
    markTodo: () => void;
}

function ToDo({ isDone, title, onEdit, onDelete, markTodo }: Props) {
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(title);
    // const [done, setDone] = useState(isDone);

    const editText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }
    const save = () => {
        onEdit(text);
        setIsEditing(false);
        setText(text);
    }

    // const changeDone = () => {
    //     setDone(!done);
    // }

    return (
        <div className="card">
            <div className="card-header">
                <input type="checkbox" checked={isDone} onClick={markTodo} />
                {!isEditing && <p>{title}</p>}
                {isEditing && <input type="text" value={text} onChange={editText} />}
            </div>
            <div className="card-buttons">
                <button onClick={
                    !isEditing
                        ? () => setIsEditing(true)
                        : save}
                >
                    {isEditing ? "Save" : "Edit"}
                </button>
                <button onClick={onDelete}>Delete</button>
            </div>
        </div>
    );
}

export default ToDo;