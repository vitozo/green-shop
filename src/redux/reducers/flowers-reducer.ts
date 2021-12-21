import {authApi} from "../../DAL/api";

const defaultState = {
    flowers: []
};

const flowersReducer = (state = defaultState, action: any) => {
    switch (action.type) {
        case 'GH/flowersReducer/getData':
            return {
                ...state, ...action.payload
            }
    }
};

const actions = {
    flowers: (flowers: any) => ({type: 'GH/flowersReducer/getData', payload: flowers}),
};

// export const dataFlowersThunk = () => async (dispatch: any) => {
//     let setFlowers = await authApi.logout();
//     dispatch(actions.flowers(setFlowers));
//     console.log(setFlowers);
// }

export const dataFlowersThunk = () => {
    return (dispatch: any) => {
        debugger
        let setFlowers = authApi.logout();
        dispatch(actions.flowers(setFlowers));
        console.log(setFlowers);
    }
};

export default flowersReducer;

