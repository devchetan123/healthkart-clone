import { getValue } from "../../utils/localStorage";

export const initialState = {
    cart : getValue("cart") || [],
    total : getValue("total")
}
