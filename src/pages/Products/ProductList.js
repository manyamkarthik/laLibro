import { useEffect, useState } from "react";
import { ProductCard } from "../../components/Elements/ProductCard";
import { FilterBar } from "./Components/FilterBar";
import { useLocation } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import { useFilter } from "../../context";
import { getProductList } from "../../services/ProductService";
import { toast } from "react-toastify";

export const ProductList = () => {
  const [showFilter, setShowFilter] = useState(false);
  const {products, initProductList}=useFilter();
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  useTitle("Products ");

  // Get the search query from the URL
  const query = new URLSearchParams(location.search).get("search");

  useEffect(() => {
    async function fetchProducts() {
      try {
        // Fetch all products from the API
       
        const data = await getProductList(query);
        

        // Filter the products based on the query
        if (query) {
          const filtered = data.filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase())
          );
          initProductList(filtered);
        } else {
          initProductList(data);
        }
      } catch(error){
        toast.error(error.message, {closeButton: true, position: "bottom-center" });
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  },[query]);  //eslint-disable-line

  if (loading) {
    return <p className="text-gray-500">Loading products...</p>;
  }

  return (
    <main>
      <section className="my-5">
        <div className="my-5 flex justify-between">
          <span className="text-2xl font-semibold dark:text-slate-100 mb-5">
            All eBooks ({products.length})
          </span>
          <span>
            <button
              onClick={() => setShowFilter(!showFilter)}
              id="dropdownMenuIconButton"
              data-dropdown-toggle="dropdownDots"
              className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700"
              type="button"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
              </svg>
            </button>
          </span>
        </div>

        <div className="flex flex-wrap justify-center lg:flex-row">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      {showFilter && <FilterBar setShowFilter={setShowFilter} />}
    </main>
  );
};
