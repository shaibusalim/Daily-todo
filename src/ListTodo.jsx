import React from 'react';
import './ListTodo.css';
import './Mode.css';


function ListTodo({
    todos,
    toggleComplete,
    deleteTodo,
    startEditing,
    isEditing,
    currentTodo,
    setCurrentTodo,
    saveEdit,
}) {
    return (
        <div className='list-todo-main'>
            <div className='list-todo-container'>
                {todos.map((todo, index) => (
                    <div key={index} className='list-todo-card'>
                        <div className='todo-li'>
                            <input
                                type='checkbox'
                                checked={todo.completed}
                                onChange={() => toggleComplete(index)}
                            />
                            {isEditing === index ? (
                                <input
                                    type="text"
                                    value={currentTodo}
                                    onChange={(e) => setCurrentTodo(e.target.value)}
                                />
                            ) : (
                                <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                                    {todo.text}
                                </li>
                            )}
                        </div>

                        <div className='todo-buttons'>
                            
                            {isEditing === index ? (
                                <button onClick={() => saveEdit(index)}>Save</button>
                            ) : (
                                <button onClick={() => startEditing(index)}>Edit</button>
                            )}
                            <button onClick={() => deleteTodo(index)}>Delete</button><br/>
                           
                            <label>{todo.dateAdded}</label>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ListTodo;
