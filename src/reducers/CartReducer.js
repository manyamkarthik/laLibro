export const CartReducer=(state,action)=>{
    const {type,payload}=action
    switch(type){
        case "ADD_TO_CART":
            return {...state, cartList: payload.products, total: payload.Total}
        
        case "REMOVE_FROM_CART":
            return {...state, cartList: payload.products, total: payload.Total}
        
        case "CLEAR_CART":
            return {...state, cartList: payload.products, total: payload.Total}
        
        default:
            throw new Error("No method found");

    }

}