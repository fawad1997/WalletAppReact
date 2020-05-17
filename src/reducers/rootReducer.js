import {combineReducers} from 'redux'
import errorReducer from './errorReducer';
import walletReducer from './walletReducer';

export default combineReducers({
    errors:errorReducer,
    wallet:walletReducer
});