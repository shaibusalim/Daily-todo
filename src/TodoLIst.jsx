import React, { useState } from 'react';
import AddTodo from './AddTodo';
import ListTodo from './ListTodo';
import FilterTodo from './FilterTodo';
import './TodoList.css';
import './Mode.css'
import CheckBoxIcon from '@mui/icons-material/CheckBox';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [isEditing, setIsEditing] = useState(null); 
    const [currentTodo, setCurrentTodo] = useState(""); 
    const [filter, setFilter] = useState("All");
    const [isDarkMode, setIsDarkMode] = useState(false);

    const addTodo = (newTodo, date) => {
        if (newTodo.trim() && date) {
            setTodos([...todos, 
                {
                     text: newTodo, 
                     completed: false, 
                     dateAdded: date,
                    
                }
            ]);
        }
    };

    const toggleComplete = (index) => {
        setTodos(todos.map((todo, i) =>
            i === index ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    const startEditing = (index) => {
        setIsEditing(index);
        setCurrentTodo(todos[index].text); // Initialize with the current todo text
    };

    const saveEdit = (index) => {
        setTodos(todos.map((todo, i) =>
            i === index ? { ...todo, text: currentTodo } : todo
        ));
        setIsEditing(null);
        setCurrentTodo("");
    };

    const filteredTodos = todos.filter(todo => {
        if (filter === "Completed") return todo.completed;
        if (filter === "Active") return !todo.completed;
        return true; // "All" filter
    });
    const toggleMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
      <div className={ `todo-list-main ${isDarkMode? 'dark-mode': 'light-mode'}`}>
        <button onClick={toggleMode}>{isDarkMode? 'Light Mode' : 'Dark Mode'}</button>
        <label>
            <CheckBoxIcon style={{width:'50px', height:'45px',color:'rgba(0, 0, 245, 0.662)'}}></CheckBoxIcon>
            <h1><span>M</span>y<span>Todo-s</span></h1>
        </label>
        <div className='todos-container'>
            <AddTodo onAddTodo={addTodo} />
           
            <div>
                    <div className='filter'>
                        <FilterTodo setFilter={setFilter}/>
                    
                    </div>
                <ListTodo
                    todos={filteredTodos}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                    startEditing={startEditing}
                    isEditing={isEditing}
                    currentTodo={currentTodo}
                    setCurrentTodo={setCurrentTodo}
                    saveEdit={saveEdit}
                />
             </div>
        </div>
      </div>
    );
}

export default TodoList;
