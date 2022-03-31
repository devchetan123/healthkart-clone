import { ADD_QTY, ADD_TO_CART, DELETE_TO_CART, REMOVE_QTY, UPDATE_TOTAL } from "./cart.actionTypes";

export const add_cart = (payload) => ({
    type : ADD_TO_CART,
    payload,
})

export const remove_cart = (payload) => ({
    type : DELETE_TO_CART,
    payload,
})

export const add_qty = (payload) => ({
    type : ADD_QTY,
    payload
})

export const remove_qty = (payload) => ({
    type : REMOVE_QTY,
    payload
})

export const totalCalculate = () => ({
    type : UPDATE_TOTAL
})

