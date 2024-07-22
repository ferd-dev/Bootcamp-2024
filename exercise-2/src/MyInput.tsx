import { useState } from "react";

type Person = {
    name: string;
    lastName: string;
}
function MyInput() {
    const [person, setPerson] = useState<Person>({ name: '', lastName: '' });

    const onChangeText = (e: React.ChangeEvent<HTMLInputElement>, target: string) => {
        console.log(e.target.value);
        setPerson({ ...person, [target]: e.target.value });
    }
    const onSave = () => {
        console.log(person);
    }
    return (
        <>
            <h2>{person.name} - {person.lastName}</h2>

            <input
                type="text"
                onChange={(e) => onChangeText(e, 'name')}
                placeholder="name" />
            <input
                type="text"
                onChange={(e) => onChangeText(e, 'lastName')}
                placeholder="lastName" />

            <br />
            <button onClick={onSave}>Save</button>
        </>
    );
}

export default MyInput;