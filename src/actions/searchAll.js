import {searchAll as searchTypes} from '../constants/actiontypes'

export const searchAll = () => async(dispatch) => {

    return fetch(`https://rickandmortyapi.com/api/character`, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(response => response.json())
      .then(json => {
          dispatch({ type: searchTypes.REQUEST_ALL_RESULT, data: json });
        })
}

export default{
    searchAll,
}