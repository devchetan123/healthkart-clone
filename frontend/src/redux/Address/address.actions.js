import { ADD_ADDRESS, REMOVE_ADDRESS, SELECT_ADDRESS, UPDATE_OTP } from "./address.actionTypes";


export const add_address = (payload) => ({
    type : ADD_ADDRESS,
    payload,
})

export const select_address = (payload) => ({
    type : SELECT_ADDRESS,
    payload,
})

export const remove_address = (payload) => ({
    type : REMOVE_ADDRESS,
    payload,
})

export const update_otp = (payload) => ({
    type : UPDATE_OTP,
    payload
})