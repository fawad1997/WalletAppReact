import {GET_WALLETS} from '../actions/types'

const initialState = {
    wallets:[]
}

export default function(state=initialState,action){
    switch(action.type){
        case GET_WALLETS:
            return {...state,wallets:action.payload};
        default:
            return state;
    }
}