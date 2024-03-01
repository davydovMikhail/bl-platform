import { MainState, MainAction, MainActionTypes } from "../../types/main";

const initialState: MainState = {
    night: true,
    loader: false
}

export const mainReducer = (state: MainState = initialState, action: MainAction): MainState => {
    switch (action.type) {
        case MainActionTypes.SET_NIGHT:
            return {...state, night: action.payload}
        case MainActionTypes.SET_LOADER:
            return {...state, loader: action.payload}
        default:
            return state
    }
}