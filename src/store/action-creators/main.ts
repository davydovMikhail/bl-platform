import { MainAction, MainActionTypes } from "../../types/main";

export function SetLoader(status: boolean): MainAction {
    return {type: MainActionTypes.SET_LOADER, payload: status}
}
export function SetNight(status: boolean): MainAction {
    return {type: MainActionTypes.SET_NIGHT, payload: status}
}