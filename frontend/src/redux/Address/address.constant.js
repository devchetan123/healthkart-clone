import { getValue } from "../../utils/localStorage";

export const initStates = {
    addresses : [
        {
            id : 1,
            name : "Chetan",
            mobile : 9900229922,
            address : "Shop No 3 Shiv Krupa Commercial Rd Gokhale",
            pincode : "Delhi - 110062"
        }
    ],
    selectAddress : getValue("selectedAddress") || {
        id : 1,
        name : "Chetan",
        mobile : 9900229922,
        address : "Shop No 3 Shiv Krupa Commercial Rd Gokhale",
        pincode : "Delhi - 110062"
    },
    otp : 100000

}