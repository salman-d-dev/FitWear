import React from 'react';
import { BsFillXCircleFill } from "react-icons/bs";

const NotAvailable = ({ showPayment, setShowPayment }) => {
  return (
    showPayment && (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center z-50">
        <div className="bg-white p-4 rounded-lg text-center relative">
          <button
            className="absolute top-1 right-2 text-sm text-red-500"
            onClick={() => setShowPayment(false)}
          >
            <BsFillXCircleFill />
          </button>
          <p className="text-blue-800 text-sm">
            This feature is currently not available. Please try again later.
          </p>
        </div>
      </div>
    )
  );
};

export default NotAvailable;
