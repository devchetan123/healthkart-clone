import { ADD_QTY, ADD_TO_CART, DELETE_TO_CART, REMOVE_QTY, SUM, UPDATE_TOTAL } from "./cart.actionTypes";
import { initialState } from "./cart.constants";

function sum(arr){
    let sum = 0
    for(let i = 0; i<arr.length; i++){
        sum += arr[i].price
    }
    return sum
}


export const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TO_CART : {
            return {
                ...state , cart : [...state.cart , payload] , total : sum(state.cart) 
            }
        }

        case DELETE_TO_CART : {
            return {
                ...state , cart : state.cart.filter(x => x.id != payload) , total : sum(state.cart)
            }
        }

        case ADD_QTY : {
            return {
                ...state , cart : state.cart.map(x => {
                    if(x.id === payload){
                        x.qty += 1
                        x.price = x.price + x.initPrice
                        return x
                    }
                    else{
                        return x
                    }
                } ) , total : sum(state.cart) 
            }
        }
        case REMOVE_QTY : {
            return {
                ...state , cart : state.cart.map(x => {
                    if(x.id === payload){
                        x.qty -= 1
                        x.price = x.price - x.initPrice
                        return x
                    }
                    else{
                        return x
                    }
                } ) , total : sum(state.cart) 
            }
        }

        case UPDATE_TOTAL : {
            return {
                ...state , total : sum(state.cart)
            }
        }

        default : {
            return state
        }
    }
}