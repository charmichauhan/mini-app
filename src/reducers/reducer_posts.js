import {GET_DATA } from '../actions/index';

const INITIAL_STATE = {all:[], post: null};

export default function (state=INITIAL_STATE , action) {
    switch (action.type){

        case GET_DATA:
            return{ ...state, post: action.payload.data};

        // case FETCH_POSTS:
        //     return{ ...state, all: action.payload.data};

        default:return state;
    }
}