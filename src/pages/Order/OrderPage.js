import { useLocation } from "react-router-dom";
import { OrderFail } from "./components/OrderFail";
import { OrderSuccess } from "./components/OrderSuccess";
import { useTitle } from "../../hooks/useTitle";

export const OrderPage = () => {
  const location = useLocation();
    const { status } = location.state || {};
    useTitle("Order Summary");
  return (
    <main>

    
    <div>{ status?<OrderSuccess/>:<OrderFail/> }</div>
    </main>
  )
}
