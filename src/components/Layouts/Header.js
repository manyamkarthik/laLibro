import { Link } from "react-router-dom";
import Logo from "../../assets/images/logoo.jpg";
import { useEffect, useState } from "react";
import { Search } from "../Sections/Search";
import { DropdownLoggedIn } from "../Elements/DropdownLoggedIn";
import { DropdownLoggedOut } from "../Elements/DropdownLoggedOut";
import { useCart } from "../../context/CartContext";

export const Header = () => {
  const [dark,setDark]=useState( JSON.parse(localStorage.getItem("dark")) || false);
  const [search,setSearch]=useState(false);
  const [drop,setDrop]=useState(false);
  const token =JSON.parse(sessionStorage.getItem("token"));
  const {cartList}=useCart();
  useEffect( () =>{
    localStorage.setItem("dark",JSON.stringify(dark));
    if(dark){
      document.documentElement.classList.add("dark");
    }
    else{
      document.documentElement.classList.remove("dark");
    }
  },[dark])
  return (
    <header>
      <nav className="bg-white dark:bg-gray-900">
        <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
        
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="h-8" alt="La Libro" />
            <span className="text-4xl font-serif text-gray-800 dark:text-gray-200 transition-transform duration-500 ease-in-out hover:scale-110  cursor-pointer">
              LaLibro
            </span>
          </Link>

          <div className="flex items-center relative">
                    <span onClick={()=> setDark(!dark)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"></span>
                    <span onClick={() => setSearch(!search) } className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"></span>
                    <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
                    <span className="text-2xl bi bi-cart-fill relative">
                        <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">{cartList.length>0?cartList.length:0}</span>
                    </span>                    
                    </Link>
                    <span  onClick={() => setDrop(!drop)} className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"></span>
                    {drop && (token?<DropdownLoggedIn setDrop={setDrop}/>:<DropdownLoggedOut setDrop={setDrop}/>)}
                </div>
        </div>
      </nav>
      {search &&<Search setSearch={setSearch}/>}
      
    </header>
  );
};
