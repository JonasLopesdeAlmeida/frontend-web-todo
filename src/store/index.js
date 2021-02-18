import { combineReducers } from 'redux';
import {homeReducer} from './homeReducer';

const mainReducer = combineReducers({

    tasks: homeReducer

})
export default mainReducer;

