import { useEffect, useState } from "react";
import searchAll from "../actions/searchAll";
import { useDispatch, useSelector } from 'react-redux';
import {searchAll as searchTypes} from '../constants/actiontypes'
import CardView from "./CardView";

const CharacterView = ({charactername}) => {

const [characters, setCharacters] = useState([]);

    // const characters = useSelector( state => state.characterList.characters )
    const dispatch = useDispatch();

    useEffect(() => {
        findAll(charactername);
    }, [charactername]);

    const findAll = async (name) => {
        // fetch(`https://rickandmortyapi.com/api/character`, {
        fetch(`https://rickandmortyapi.com/api/character/?name=${charactername}&status=alive`, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
        })
        .then(response => response.json())
        .then(json => {
            setCharacters(json.results);
          dispatch({ type: searchTypes.REQUEST_ALL_RESULT, payload: json.results });
        })
    };

    return (
        <div>
            <div className="row mt-2">
                <h3 className='title-page'>Characters</h3>
                {
                    characters.map(item => (
                        <CardView key={item.id} character1 = {item}/>
                    ))
                }
            </div>
            <h2>View characters {charactername}</h2>
        </div>
    );
};

export default CharacterView;