import {authApi} from "../../dal/api";
import {ThunkAction} from "redux-thunk";

import {AppStateType, InferActionsType} from "../store";

import {flowersType} from "../../commonTypes/commonTypes";


const defaultState = {
    flowers: [] as Array<flowersType>
}


type DefaultStateType = typeof defaultState

const flowersReducer = (state = defaultState, action: ActionsType): DefaultStateType => {
    switch (action.type) {
        case 'GH/flowersReducer/getData':
            return {
                ...state, ...action.payload
            }
            default: 
                return state
    }
};

type ActionsType = InferActionsType<typeof actions>

const actions = {
    flowers: (flowers: any) => ({type: 'GH/flowersReducer/getData', payload: flowers}),
};

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>

export const getDataFlowersThunk = (): ThunkType => async (dispatch) => {
        let setAuth = await authApi.logout()
        dispatch(actions.flowers(setAuth))
}

export default flowersReducer;

