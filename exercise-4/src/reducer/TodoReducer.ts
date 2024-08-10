let nextId = 0;
function handleAddTodo(text: string) {
    return {
        type: 'ADD_TODO',
        id: nextId++,
        payload: text
    };
}