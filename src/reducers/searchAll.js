import {searchAll as searchTypes} from '../constants/actiontypes'

export const searchAll = (state = {characters: [],}, action) => {

    switch(action.type) {
        case searchTypes.REQUEST_ALL:
            return { ...state, list: action.payload };
        case searchTypes.REQUEST_ALL_RESULT:
            return { ...state, characters: [...state.characters, action.payload] };
        default:
            return state;
    }
}

export default searchAll