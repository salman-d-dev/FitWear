"use client";
import { CartContext } from "@/app/context/CartContext";
import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Product({ params }) {
  const { slug } = params;
  const decodedSlug = decodeURIComponent(slug);
  const { addToCart,setCart,saveCart } = useContext(CartContext);

  const [pin, setPin] = useState("");
  const [serviceable, setServiceable] = useState(null);

  const checkServiceability = async () => {
    const pins = await fetch("http://localhost:3000/api/getpincodes");
    const pinJson = await pins.json();
    if (pinJson.includes(parseInt(pin))) {
      setServiceable(true);
    } else {
      setServiceable(false);
    }
  };
  const handlePinChange = (e) => {
    setPin(e.target.value);
  };

  const [gotProduct, setGotProduct] = useState({});
  const [selectedColor, setSelectedColor] = useState(null);
  const [availableSizes, setAvailableSizes] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/getproducts/${decodedSlug}`
        );

        if (!response.ok) {
          // Handle error here, if needed
          throw new Error("Failed to fetch data");
        }

        const parseddata = await response.json();
        setGotProduct(parseddata);
        setSelectedColor(parseddata.product.color);
        setSelectedSize(parseddata.product.size);
      } catch (error) {
        console.error(error);
        // Handle error here, e.g., return a default value or throw an error
      }
    };
    getData();
  }, []);
  // Conditional rendering, only render when gotProduct is available
  if (!gotProduct || Object.keys(gotProduct).length === 0) {
    return (
      <div className="absolute bg-white bg-opacity-100 z-10 h-full w-full flex items-center justify-center">
        <div className="flex items-center">
          <span className="text-3xl mr-4">Loading</span>
          <svg
            className="animate-spin h-8 w-8 text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-100"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      </div>
    ); // We can render a loading indicator or return an empty component
  }

  // eslint-disable-next-line
  const router = useRouter();
  const handleBuyNow = ()=>{

      addToCart(
        gotProduct.variants[selectedColor][selectedSize].slug, 1 , 5000 ,`${gotProduct.product.title} (${selectedSize}/${selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)})`, selectedSize,selectedColor);
      router.push("/checkout");
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-16 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto px-24 object-cover object-top rounded"
            src={gotProduct.product.img}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              Fit Wear
            </h2>

            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {gotProduct.product.title} ({selectedSize}/
              {selectedColor.charAt(0).toUpperCase() + selectedColor.slice(1)})
            </h1>

            
            <p className="leading-relaxed">{gotProduct.product.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                {Object.keys(gotProduct.variants).map((col) => {
                  return (
                    <button
                      onClick={() => {
                        setSelectedColor(col);

                        // Update the selectedSize state when a color is clicked
                        const sizeOptions = Object.keys(
                          gotProduct.variants[col]
                        );
                        if (sizeOptions.includes(selectedSize)) {
                          setSelectedSize(selectedSize);
                        } else {
                          setSelectedSize(sizeOptions[0]); // Select the first available size by default
                        }
                        //set the sizes for particular color selected
                        setAvailableSizes(sizeOptions);
                      }}
                      key={col}
                      style={{ backgroundColor: `${col}` }}
                      className={
                        "border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:border-black"
                      }
                    ></button>
                  );
                })}
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select
                    onChange={(e) => {
                      setSelectedSize(e.target.value);
                    }}
                    value={selectedSize}
                    className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
                  >
                    {availableSizes.map((size) => {
                      return <option key={size}>{size}</option>;
                    })}
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                ₹399.00
              </span>
              <button className="flex ml-4 text-sm md:text-base md:ml-12 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded " onClick={handleBuyNow}>
                Buy Now
              </button>
              <button
                className="flex ml-2 text-sm md:text-base md:ml-4 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded "
                onClick={() => {
                  addToCart(
                    gotProduct.variants[selectedColor][selectedSize].slug,
                    1,
                    5000,
                    `${gotProduct.product.title} (${selectedSize}/${
                      selectedColor.charAt(0).toUpperCase() +
                      selectedColor.slice(1)
                    })`,
                    selectedSize,
                    selectedColor
                  );
                }}
              >
                Add to Cart
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
            <div className="pin mt-6 flex space-x-2 text-sm">
              <input
                type="text"
                className="mx-2 border-2 border-purple-600 rounded-md p-2"
                onChange={handlePinChange}
                placeholder="Enter area PIN code"
              />
              <button
                className="flex ml-14 text-sm md:text-base text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded "
                onClick={checkServiceability}
              >
                Check
              </button>
            </div>
            {!serviceable && serviceable != null && pin && (
              <div className="text-red-500 my-2">
                Sorry! We do not deliver to this location as of yet.
              </div>
            )}
            {serviceable && serviceable != null && (
              <div className="green-red-500 my-2">
                Yay! We deliver to your location!
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
