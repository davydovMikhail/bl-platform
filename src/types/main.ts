export interface MainState {
    night: boolean;
    loader: boolean;    
    balance: number;
    mustHave: number;
    bankLevel: number;
    rechargingLevel: number;
}

export enum MainActionTypes {
    SET_NIGHT = 'SET_NIGHT',
    SET_LOADER = 'SET_LOADER',
    SET_BALANCE = 'SET_BALANCE',
    SET_MUSTHAVE = 'SET_MUSTHAVE',
    SET_BANK = 'SET_BANK',
    SET_SPEED = 'SET_SPEED',
} 

interface SetNightAction {
    type: MainActionTypes.SET_NIGHT;
    payload: boolean;
}
interface SetLoaderAction {
    type: MainActionTypes.SET_LOADER;
    payload: boolean;
}

interface SetBalanceAction {
    type: MainActionTypes.SET_BALANCE;
    payload: number;
}
interface SetMusthaveAction {
    type: MainActionTypes.SET_MUSTHAVE;
    payload: number;
}

interface SetBankLevelAction {
    type: MainActionTypes.SET_BANK;
    payload: number;
}
interface SetRechargingLevelAction {
    type: MainActionTypes.SET_SPEED;
    payload: number;
}

export type MainAction = 
    SetNightAction |
    SetLoaderAction |
    SetBalanceAction |
    SetMusthaveAction |
    SetBankLevelAction |
    SetRechargingLevelAction;