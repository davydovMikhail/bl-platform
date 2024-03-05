import { MainAction, MainActionTypes } from "../../types/main";

export function SetLoader(status: boolean): MainAction {
    return {type: MainActionTypes.SET_LOADER, payload: status}
}
export function SetNight(status: boolean): MainAction {
    return {type: MainActionTypes.SET_NIGHT, payload: status}
}
export function SetBalance(balance: number): MainAction {
    return {type: MainActionTypes.SET_BALANCE, payload: balance}
}
export function SetMusthave(amount: number): MainAction {
    return {type: MainActionTypes.SET_MUSTHAVE, payload: amount}
}
export function SetBankLevel(level: number): MainAction {
    return {type: MainActionTypes.SET_BANK, payload: level}
}
export function SetRechargingLevel(level: number): MainAction {
    return {type: MainActionTypes.SET_SPEED, payload: level}
}