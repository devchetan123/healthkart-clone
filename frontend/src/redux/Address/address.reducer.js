import { deleteValue, selectAddress, updateAddress, updateValue } from "../../utils/localStorage"
import { ADD_ADDRESS, REMOVE_ADDRESS, SELECT_ADDRESS, UPDATE_OTP } from "./address.actionTypes"
import { initStates } from "./address.constant"

export const addressReducer = (state = initStates, { type, payload }) => {
    switch (type) {

        case ADD_ADDRESS : {
            updateValue("address", payload)
            return {
                ...state , addresses : [...state.addresses , payload]  
            }
        }

        case REMOVE_ADDRESS : {
            deleteValue("address", payload)
            return {
                ...state , addresses : state.addresses.filter(x => x.id != payload) 
            }
        }

        case SELECT_ADDRESS : {
            selectAddress("selectedAddress", payload)
            return {
                ...state, selectAddress : payload
            }
        }

        case UPDATE_OTP : {
            return {
                ...state, otp : payload
            }
        }

        default : {
            return state
        }
    }
}