"use client"

export default function ProductCard({title, slug, description, category, price, availableQty, size,color, img,handleRemoveProduct}) {
  return (
    <div className='w-full sm:w-1/2 md:w-1/3 h-fit bg-slate-100 flex items-center justify-center flex-col rounded-2xl p-4 gap-1 shadow-lg text-center my-3'>
        <h2 className='font-light'>{category}</h2>
        <h1 className='font-bold'>{title}</h1>
        <h2 className='font-light text-sm'>Slug:{slug}</h2>
        <img className="w-full md:w-2/3 rounded-md my-2" src={img? img :""} alt="Product.jpg"/>
        <h3>₹{price}</h3>
        <h3>{size? `Size: ${size}` : ""}</h3>
        <h3>{color? color.slice(0,1).toUpperCase()+ color.slice(1) : ""}</h3>
        <h3>Quantity: {availableQty}</h3>
        {/* limit description visibility to 20 chars */}
        <p className="text-sm italic break-words md:w-3/5">{description.length>=20? description.slice(0,20) +"..." : description}</p>
        <button className="bg-[#03c9d7] hover:bg-red-400 rounded-lg p-2 text-white my-2 text-sm" onClick={()=>{handleRemoveProduct(slug)}}>Remove</button>
    </div>
  );
}
