import generation from './generation';
import dragon from './dragon';
import account from './account';
import accountDragons from './accountDragons';
import accountInfo from './accountInfo'
import publicDragons from './publicDragons';
import {combineReducers} from 'redux';

export default combineReducers({generation, dragon, account, accountDragons, accountInfo, publicDragons});