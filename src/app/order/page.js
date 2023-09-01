const Order = () => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">Fit-Wear</h2>
        <h1 className="text-gray-900 text-2xl title-font font-medium mb-4">Order ID: #123123</h1>
        <div className="flex mb-4">
          <span className="flex-grow text-green-500  py-2 text-lg px-1">Your order has been placed successfully</span>
        </div>
        <div class="flex mb-4">
          <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1 text-center">Item</a>
          <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1 text-center">Quantity</a>
          <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1 text-center">Price</a>
        </div>
        <div className="flex border-b  py-2 justify-around">
          <span className=" text-gray-500 w-2/4">Perfect-Fit (XL/Cu)</span>
          <span className=" text-gray-900 w-1/4">1</span>
          <span className=" text-gray-900 w-1/4 text-center">₹499</span>
        </div>
        <div className="flex border-b  py-2">
          <span className="text-gray-500 w-2/4">Perfect-Fit (M/Cu)</span>
          <span className="text-gray-900 w-1/4">1</span>
          <span className="text-gray-900 w-1/4 text-center">₹399</span>
        </div>
        <div className="flex border-b  py-2">
          <span className="text-gray-500 w-2/4">Perfect-Fit (SM/Cu)</span>
          <span className="text-gray-900 w-1/4">1</span>
          <span className="text-gray-900 w-1/4 text-center">₹299</span>
        </div>
        <div className="flex my-3">
          <span className="title-font font-medium text-2xl text-gray-900">Total: ₹1200</span>
          <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Track Order</button>
        </div>
      </div>
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/>
    </div>
  </div>
</section>
    </div>
  )
}

export default Order
