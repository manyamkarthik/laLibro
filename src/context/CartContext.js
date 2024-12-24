import { createContext, useContext, useReducer } from "react"
import { CartReducer } from "../reducers/CartReducer";

const cartInitialState={
    cartList:[],
    total:0
}

const CartContext=createContext(cartInitialState);

export const CartProvider=({children}) =>{
    const [state,dispatch]=useReducer(CartReducer,cartInitialState);

    const isInCart = (id) => {
        return state.cartList.some((item) => item.id === id);
      };
    
    const addToCart=(product)=>{
        const updatedCart=state.cartList.concat(product);
        const updatedTotal=state.total+product.price;
      
        
        
        dispatch({
            type:"ADD_TO_CART",
            payload:{
                products: updatedCart,
                Total:updatedTotal
            }
        })
    }

    const removeFromCart=(product)=>{
        const updatedCart=state.cartList.filter( current => current.id!==product.id );
        const updatedTotal=state.total-product.price;
        
        
        
        dispatch({
            type:"REMOVE_FROM_CART",
            payload:{
                products: updatedCart,
                Total:updatedTotal
            }
        })
    }
    function clearCart(){
        dispatch({
            type: "CLEAR_CART",
            payload: {
                products: [],
                Total: 0
            }
        })
    }

    const value = {
        cartList: state.cartList,
        total: state.total,
        addToCart,
        removeFromCart,
        clearCart,
        isInCart
    }
   

    

    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart=() =>{
    const cart=useContext(CartContext);
    return cart;
}