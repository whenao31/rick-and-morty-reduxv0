import React, { useState } from "react";
import {useCustomForm} from '../customhook/useCustomForm'

const SearchForm = ({setCharacterState}) => {

    const [inputs, handleChange, reset] = useCustomForm({
        character: ""
    });

    const {character} = inputs;

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!character.trim()){
            return alert('Please enter a character');
        }

        setCharacterState({character: character.trim().toLowerCase()});
        reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                placeholder='Enter character'
                className='form-control mb-2'
                value={character}
                name='character'
                onChange={handleChange}
            />
            <input type='submit' className='btn btn-outline-info'/>
        </form>
    );
}

export default SearchForm;