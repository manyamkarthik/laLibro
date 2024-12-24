
import { useCart } from "../../context/CartContext"
import { useTitle } from "../../hooks/useTitle";
import { CartEmpty } from "./components/CartEmpty"
import { CartList } from "./components/CartList"

export const CartPage = () => {
  const {cartList}=useCart();

  const cartListLength=cartList.length
  useTitle(`Cart (${cartList.length})`);
  
  return (
    <main>
      
      {cartListLength>0?<CartList/>:<CartEmpty/> } 
      
              
    </main>
  )
}
