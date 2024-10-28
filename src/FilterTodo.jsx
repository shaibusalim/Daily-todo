import React from 'react';
import './FilterTodo.css'

function FilterTodo({ setFilter }) {
    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    return (
        <div className='filter-todo-main'>
            <div className='filter-todo-container'>
                <h4>Filter</h4>
                <select onChange={handleFilterChange}>
                    <option value="All">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Active">Active</option>
                </select>
            </div>
        </div>
    );
}

export default FilterTodo;
