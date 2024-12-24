import { Route, Routes } from "react-router-dom"
import { CartPage, HomePage, Login, ProductDetail, ProductList, Register } from "../pages"
import { ProtectedRoute } from "./ProtectedRoute"
import { OrderPage } from "../pages/Order/OrderPage"
import { DashboardPage } from "../pages/Dashboard/DashboardPage"
import { PageNotFound } from "../pages/PageNotFound"


export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route element={<HomePage/>} path="/" />
        <Route element={<ProductList/>} path="products"/>
        <Route element={<ProductDetail/>} path="products/:id" />
        <Route element={<Login/>} path="login"/>
        <Route element={ <Register/> } path="register"/>
        <Route element={ <PageNotFound/> } path="*"/>
        <Route path="cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
        <Route path="order-summary" element={<ProtectedRoute><OrderPage /></ProtectedRoute>} />
        <Route path="dashboard" element={<ProtectedRoute><DashboardPage/></ProtectedRoute>} />
    </Routes>
    </>
  )
}
