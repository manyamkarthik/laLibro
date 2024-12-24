import { useEffect, useState } from "react";
import {  DashboardCard } from "./components/DashboardCard"
import {  DashboardEmpty } from "./components/DashboardEmpty"
import { useTitle } from "../../hooks/useTitle";
import { getUserOrders } from "../../services/DataService";
import { toast } from "react-toastify";

export const DashboardPage = () => {
  const [orders,setOrders]=useState([]);
  useTitle("Dashboard");
 
  useEffect( () => {
    async function fetchUsers() {
      try {
       
        const data = await getUserOrders();
         
        setOrders(data); // Update state with fetched orders
      } catch(error){
        toast.error(error.message, {closeButton: true, position: "bottom-center"});
      }
    }
    fetchUsers();
  }, [] )


  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
      </section>
      <section>
  {orders.length > 0 &&
    orders.map((order) => (
      <DashboardCard key={order.id} order={order} />
    ))}
</section>
<section>
  {! orders.length && <DashboardEmpty />}
</section>
    </main> 
  )
}
