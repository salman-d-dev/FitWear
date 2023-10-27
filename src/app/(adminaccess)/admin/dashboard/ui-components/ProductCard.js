"use client"

export default function ProductCard({title, slug, description, category, price, availableQty, size,color}) {
  return (
    <div className='min-w-full sm:min-w-1/2 md:w-1/3 lg:w-1/4 h-fit bg-slate-100 flex items-center justify-center flex-col rounded-2xl p-4 gap-1 shadow-lg text-center my-3'>
        <h2 className='font-light'>{category}</h2>
        <h1 className='font-bold'>{title}</h1>
        <h2 className='font-light text-sm'>{slug}</h2>
        <h3>₹{price}</h3>
        <h3>{size? size : ""}</h3>
        <h3>{color? color : ""}</h3>
        <h3>Quantity: {availableQty}</h3>
        <p className="text-sm italic break-words md:w-3/5">{description}</p>
    </div>
  );
}
