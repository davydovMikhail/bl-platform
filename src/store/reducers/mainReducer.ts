import { MainState, MainAction, MainActionTypes } from "../../types/main";

const initialState: MainState = {
    night: true,
    loader: false,
    balance: 0,
    mustHave: 0,
    bankLevel: 0,
    rechargingLevel: 0
}

export const mainReducer = (state: MainState = initialState, action: MainAction): MainState => {
    switch (action.type) {
        case MainActionTypes.SET_NIGHT:
            return {...state, night: action.payload}
        case MainActionTypes.SET_LOADER:
            return {...state, loader: action.payload}
        case MainActionTypes.SET_BALANCE:
            return {...state, balance: action.payload}
        case MainActionTypes.SET_MUSTHAVE:
            return {...state, mustHave: action.payload}
        case MainActionTypes.SET_BANK:
            return {...state, bankLevel: action.payload}
        case MainActionTypes.SET_SPEED:
            return {...state, rechargingLevel: action.payload}
        default:
            return state
    }
}