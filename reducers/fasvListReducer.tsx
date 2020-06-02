import * as actionTypes from '../actions/types/ToggleFav';
import { ISingleElementList } from '../entities/favImgEl';

export interface IFavListReducer {
    favList: ISingleElementList[];
}

const defaultState = (): IFavListReducer => ({
    favList: []
});

export default (state = defaultState(), action: any): IFavListReducer => {
    switch (action.type) {
        case actionTypes.Toggle: {
            if((state.favList as object[]).indexOf(action.Toggle) != -1){
                return {
                    ...state,
                    favList: state.favList.filter((x) => {return x.key != action.Toggle.key})
                };
            }else{
                return {
                    ...state,
                    favList: [...state.favList, action.Toggle]
                };
            }
        }
        default: {
            return state;
        }
    }
};