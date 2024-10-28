import React, { useState } from 'react';
import './AddTodo.css';

function AddTodo({ onAddTodo }) {
    const [value, setValue] = useState("");
    const [selectedDate, setSelectedDate] = useState("");

    const handleInputChange = (e) => {
        setValue(e.target.value);
    };

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString("default", { month: "short" });
        const year = date.getFullYear();

        const suffix = (day) => {
            if (day > 3 && day < 21) return 'th';
            switch (day % 10) {
                case 1: return 'st';
                case 2: return 'nd';
                case 3: return 'rd';
                default: return 'th';
            }
        };

        return `${day}${suffix(day)} ${month} ${year}`;
    };

    const handleAddTodo = () => {
        if (value.trim() && selectedDate) {
            const formattedDate = formatDate(selectedDate);
            onAddTodo(value, formattedDate);
            setValue("");
            setSelectedDate("");
        }
    };

    return (
        <div className='add-todo-main'>
            <div className='add-todo-container'>
                <div className='add-todo-card'>
                    <input
                        type='text'
                        placeholder='Add new...'
                        onChange={handleInputChange}
                        value={value}
                    />
                    <input 
                        type="date" 
                        onChange={handleDateChange} 
                        value={selectedDate} 
                        className="calendar-icon" 
                    />
                    <button onClick={handleAddTodo}>ADD</button>
                </div>
            </div>
        </div>
    );
}

export default AddTodo;
