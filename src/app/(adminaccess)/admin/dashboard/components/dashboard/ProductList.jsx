import { GlobalContext } from "@/app/context/GlobalContext";
import { useContext, useEffect } from "react";
import {AiFillCloseCircle} from 'react-icons/ai';
import { toast } from "react-toastify";


const ProductList = ({category}) => {

    const {products, setProducts} = useContext(GlobalContext);
    useEffect(()=>{
        const fetchProducts = async()=>{
            const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/admin/getproducts`,{
                method:"POST",
                headers:{
                  "Content-Type": "application/json",
                  "admin-token":localStorage.getItem("admin-token"),
                },
                body: JSON.stringify({category: category})
              }
              );
            if(response.status === 200){
                const parsedProducts = await response.json();
                setProducts(parsedProducts)
            }
        }
        fetchProducts();
    },[category]);

    const handleRemoveProduct = async(id)=>{
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/admin/removeproduct`,{
        method:"POST",
        headers:{
          "Content-Type": "application/json",
          "admin-token":localStorage.getItem("admin-token"),
        },
        body: JSON.stringify({id:id})
          }
      );
      //on delete, filter the products array
      if(response.status === 200){
        toast.success('Product Deleted', {
          position: "bottom-center",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
          const filteredProducts = products.filter((product)=> product._id !== id);
          setProducts(filteredProducts);
      } else {
        toast.error('Unable to delete!', {
          position: "bottom-center",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
    }

  return (
    <div className="mt-3">
        <h1 className='text-center font-sans text-[1.5rem] font-semibold my-4'>{category}</h1>
        <div className="relative overflow-x-auto rounded-md">
          <table className="w-full text-sm text-left">
            <thead className="text-sm text-gray-700 uppercase  bg-cyan-100">
              <tr className='border-b-2 border-gray-400'>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Variant
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Remove
                </th>
              </tr>
            </thead>
            <tbody>
              {products &&
                products.map((productItem) => {return(

                    <tr
                      key={productItem._id}
                      className="bg-cyan-50 border-b hover:bg-green-100"
                    >
                      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">{productItem.title}</th>
                      <td className="px-6 py-4">{category === "T-Shirts" || category === "Hoodies" ? (

                     `(${productItem.size} ${productItem.color})` ) : (
                        "NA"
                      )}</td>
                      <td className="px-6 py-4">₹{productItem.price}</td>
                      <td className={`px-6 py-4 ${productItem.availableQty < 10 ? "text-red-600 font-bold" : ""}`}>{productItem.availableQty}</td>
                      <td className="px-6 py-4">{productItem.category}</td>
                      <td className="px-6 py-4"><AiFillCloseCircle className={`text-red-400 cursor-pointer`} onClick={()=>{handleRemoveProduct(productItem._id)}}/></td>
                    </tr>
                )
                })}
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default ProductList
