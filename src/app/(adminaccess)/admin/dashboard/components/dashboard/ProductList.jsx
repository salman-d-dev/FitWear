import { useEffect, useState } from "react"

const ProductList = ({category}) => {

    const [products, setProducts] = useState([])
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
    },[category])
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
