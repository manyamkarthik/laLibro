import { createContext, useContext, useReducer } from "react"
import { filterReducers } from "../reducers";

const filterInitialState = {
    productList: [],
    onlyInStock: false,
    bestSellerOnly: false,
    sortBy: null,
    ratings: null
}

const FilterContext=createContext(filterInitialState);

export const FilterProvider=({children}) => {

    const [state,dispatch]=useReducer(filterReducers,filterInitialState);

    function initProductList(products){
        dispatch({
            type:"PRODUCT_LIST",
            payload:{
                products:products
            }

        })
    }

    function bestseller(products){
        return state.bestSellerOnly? products.filter( (product) => product.best_seller===true ):products
    }
    function inStock(products){
        return state.onlyInStock? products.filter( (product) => product.in_stock===true ):products
    }
    function sortProducts(products){
        if(state.sortBy==="lowtohigh"){
           return  products.sort( (a,b) => Number(a.price)-Number(b.price) )
        }
        if(state.sortBy==="hightolow"){
           return  products.sort( (a,b) => Number(b.price) - Number(a.price))
        }
        return products;
    }

    function rating(products){
        if(!state.ratings){
       
            return products;
        }
        const ratingThreshold = parseInt(state.ratings);
        return products.filter(product => product.rating >= ratingThreshold);
    }

    const FilterdProducts= rating(sortProducts(inStock(bestseller(state.productList))));



    const value={
        state,
        dispatch,
        products:FilterdProducts,
        initProductList
    }
    return(
    <FilterContext.Provider value={value}>
        {children}
    </FilterContext.Provider>);

}
export const useFilter=()=>{
    const filterContext=useContext(FilterContext);
    return filterContext;
}