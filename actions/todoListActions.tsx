import * as actionTypes from './types/ToggleFav';
import { ISingleElementList } from '../entities/favImgEl';

export const setNewElemTodoList = (Toggle: ISingleElementList) => ({
    type: actionTypes.Toggle,
    Toggle
})