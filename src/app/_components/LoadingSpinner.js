const LoadingSpinner = () => {
    return (
        <div className="absolute inset-0 bg-white dark:bg-gradient-to-tr from-black to-[#01172e] bg-opacity-100 z-10 flex items-center justify-center">
    <div className="flex items-center">
      <span className="text-3xl mr-4 dark:text-gray-200">Loading</span>
      <svg
        className="animate-spin h-8 w-8 text-gray-800 dark:text-cyan-400"
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
  
      );
}

export default LoadingSpinner;
