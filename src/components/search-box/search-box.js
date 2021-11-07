import React from 'react';
import './search-box.css';

export const SearchBox = ({placeholder, handleChange}) => {
    return (
        <input 
        className='search'
        onChange={handleChange} 
        placeholder={placeholder} 
        type='search'

        />
    )
}