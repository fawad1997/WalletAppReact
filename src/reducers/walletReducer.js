import {GET_WALLETS, DELETE_WALLET} from '../actions/types'

const initialState = {
    wallets:[]
}

export default function(state=initialState,action){
    switch(action.type){
        case GET_WALLETS:
            return {...state,wallets:action.payload};
        case DELETE_WALLET:
            return{...state,wallets:state.wallets.filter(x=>x.id!==action.payload)}
        default:
            return state;
    }
}