"use client";
import { GlobalContext } from "@/app/context/GlobalContext";
import { useContext, useEffect, useState } from "react";
//for toast
import { toast } from "react-toastify";
import LoadingSpinner from "@/app/_components/LoadingSpinner";

export default function Product({ params }) {
  const {
    addToCart,
    gotProduct,
    setGotProduct,
    selectedColor,
    setSelectedColor,
    availableSizes,
    setAvailableSizes,
    selectedSize,
    setSelectedSize,
    setServiceable,
    router,
  } = useContext(GlobalContext);

  const { slug } = params;
  const decodedSlug = decodeURIComponent(slug);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`/api/getproducts/${decodedSlug}`);

        if (!response.ok) {
          // Handle error here, if needed
          throw new Error("Failed to fetch data");
        }

        const parseddata = await response.json();
        if (parseddata !== null && parseddata !== undefined) {
          setGotProduct(parseddata);
          console.log(parseddata);
          setSelectedColor(parseddata.product.color);
          setSelectedSize(parseddata.product.size);
          setAvailableSizes([parseddata.product.size]);
        }
      } catch (error) {
        console.error(error);
        // Handle error here, e.g., return a default value or throw an error
      }
    };

    getData();
  }, []);

  const [pin, setPin] = useState("");

  const checkServiceability = async () => {
    const pins = await fetch(`/api/getpincodes`);
    const pinJson = await pins.json();
    if (pinJson.includes(pin)) {
      setServiceable(true);
      //show toast
      toast.success("Yay! We deliver at your location!", {
        position: "bottom-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      setServiceable(false);
      setPin("");
      //show toast
      toast.warn("Sorry! We are unable to deliver there yet!", {
        position: "bottom-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const handleBuyNow = () => {
    //if logged In
    if (localStorage.getItem("token")) {
      addToCart(
        gotProduct.variants
          ? gotProduct.variants[selectedColor][selectedSize].slug
          : gotProduct.product.slug,
        1,
        gotProduct.product.price,
        `${gotProduct.product.title} ${
          selectedSize !== undefined && selectedSize !== null
            ? "(" + selectedSize + " / "
            : ""
        }${
          selectedColor !== undefined && selectedColor !== null
            ? selectedColor.charAt(0).toUpperCase() +
              selectedColor.slice(1) +
              ")"
            : ""
        }`,
        gotProduct.variants ? selectedSize : null,
        gotProduct.variants ? selectedColor : null
      );
      router.push("/checkout");
    } else {
      router.push("/login");
      toast.warn("Please Login to place order", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  // Conditional rendering, only render when gotProduct is available
  if (
    gotProduct === null ||
    Object.keys(gotProduct).length === 0 ||
    gotProduct === undefined
  ) {
    return <LoadingSpinner />; // We can render a loading indicator or return an empty component
  } else {
    return (
      <section className="text-gray-600 dark:text-gray-300 body-font overflow-hidden md:min-h-screen">
        <div className="px-5 py-10 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto px-24 object-cover object-top rounded"
              src={
                gotProduct.variants[selectedColor]?.[selectedSize]?.img ||
                gotProduct.product.img
              }
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 dark:text-cyan-300 tracking-widest">
                Fit Wear
              </h2>

              <h1 className="text-gray-900 dark:text-gray-200 text-3xl title-font font-medium mb-1 md:mb-10 md:mt-6">
                {gotProduct.product.title}{" "}
                {gotProduct.variants && (
                  <>
                    {selectedSize && `(${selectedSize} / `}
                    {selectedColor &&
                      `${
                        selectedColor.charAt(0).toUpperCase() +
                        selectedColor.slice(1)
                      })`}
                  </>
                )}
              </h1>
              <p className="leading-relaxed my-4">
                {gotProduct.product.description}
              </p>
              <div
                className={`h-[1px] ${
                  gotProduct.variants[selectedColor][selectedSize]
                    .availableQty === 0
                    ? "visible"
                    : "hidden"
                }`}
              >
                <p className="text-red-500 italic text-sm">
                  (This item is currently out of stock)
                </p>
              </div>

              {gotProduct.variants &&
                gotProduct.product.size &&
                gotProduct.product.color &&
                Object.keys(gotProduct.variants).length > 0 &&
                selectedColor !== undefined &&
                selectedColor !== null &&
                selectedSize !== undefined &&
                selectedSize !== null && (
                  <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 dark:border-purple-700 mb-5">
                    <div className="flex">
                      <span className="mr-3">Color</span>
                      {Object.keys(gotProduct.variants).map((col, index) => {
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
                              // Set the sizes for the particular color selected
                              setAvailableSizes(sizeOptions);
                            }}
                            key={col + `${index}`}
                            style={{ backgroundColor: `${col}` }}
                            className={`${
                              selectedColor === col
                                ? "border-black dark:border-cyan-400"
                                : "border-gray-300 dark:border-white"
                            } border-2 ml-1 rounded-full w-6 h-6`}
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
                          className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10 dark:border dark:border-cyan-300 dark:bg-black dark:text-white"
                        >
                          {availableSizes.map((size) => {
                            return <option key={size}>{size}</option>;
                          })}
                        </select>
                        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 dark:text-gray-200 pointer-events-none flex items-center justify-center">
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
                )}

              <div className="flex">
                <span
                  className={`title-font font-medium dark:text-white text-2xl text-${
                    gotProduct &&
                    selectedSize &&
                    selectedColor &&
                    gotProduct.variants[selectedColor][selectedSize]
                      .availableQty === 0
                      ? "red-500"
                      : "gray-800"
                  } w-36`}
                >
                  {`${
                    gotProduct &&
                    selectedSize &&
                    selectedColor &&
                    gotProduct.variants[selectedColor][selectedSize]
                      .availableQty === 0
                      ? "Out of Stock"
                      : "₹" +
                        gotProduct.variants[selectedColor][selectedSize].price
                  }`}
                </span>
                <button
                  disabled={
                    gotProduct &&
                    selectedSize &&
                    selectedColor &&
                    gotProduct.variants[selectedColor][selectedSize]
                      .availableQty === 0
                  }
                  className="flex ml-4 text-sm md:text-base md:ml-12 text-white bg-indigo-500 dark:bg-purple-800 dark:hover:bg-purple-600 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded disabled:bg-gray-500"
                  onClick={handleBuyNow}
                >
                  Buy Now
                </button>
                <button
                  className="flex ml-2 text-sm md:text-base md:ml-4 text-white bg-indigo-500 dark:bg-purple-800 dark:hover:bg-purple-600 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded disabled:bg-gray-500"
                  disabled={
                    gotProduct &&
                    selectedSize &&
                    selectedColor &&
                    gotProduct.variants[selectedColor][selectedSize]
                      .availableQty === 0
                  }
                  onClick={() => {
                    addToCart(
                      gotProduct.variants
                        ? gotProduct.variants[selectedColor][selectedSize].slug
                        : gotProduct.product.slug,
                      1,
                      gotProduct.product.price,
                      `${gotProduct.product.title} ${
                        selectedSize !== undefined && selectedSize !== null
                          ? "(" + selectedSize + " / "
                          : ""
                      }${
                        selectedColor !== undefined && selectedColor !== null
                          ? selectedColor.charAt(0).toUpperCase() +
                            selectedColor.slice(1) +
                            ")"
                          : ""
                      }`,
                      gotProduct.variants ? selectedSize : null,
                      gotProduct.variants ? selectedColor : null
                    );
                  }}
                >
                  Add to Cart
                </button>
              </div>
              <div className="pin mt-6 flex space-x-2 text-sm">
                <input
                  type="text"
                  value={pin}
                  className="mx-2 border-2 border-purple-600 rounded-md p-2 dark:border dark:border-cyan-300 dark:bg-black dark:text-white"
                  onChange={(e) => {
                    setPin(e.target.value);
                  }}
                  placeholder="Enter area PIN code"
                />
                <button
                  className="flex ml-14 text-sm md:text-base text-white bg-indigo-500 dark:bg-purple-800 dark:hover:bg-purple-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded "
                  onClick={checkServiceability}
                >
                  Check Delivery
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
