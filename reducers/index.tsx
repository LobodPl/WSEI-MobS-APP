import { combineReducers } from 'redux';

import favList, { IFavListReducer } from './fasvListReducer';

export default combineReducers({
    favList
});

export interface IState {
    favList: IFavListReducer;
}