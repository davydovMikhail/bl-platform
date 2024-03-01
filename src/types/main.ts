export interface MainState {
    night: boolean;
    loader: boolean;    
}

export enum MainActionTypes {
    SET_NIGHT = 'SET_NIGHT',
    SET_LOADER = 'SET_LOADER'
} 

interface SetNightAction {
    type: MainActionTypes.SET_NIGHT;
    payload: boolean;
}
interface SetLoaderAction {
    type: MainActionTypes.SET_LOADER;
    payload: boolean;
}

export type MainAction = 
    SetNightAction |
    SetLoaderAction;