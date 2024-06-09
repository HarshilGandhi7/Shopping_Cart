import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";

export default function Price() {
    const { cart } = useSelector((state) => state);
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    return (
        <div className="flex flex-col gap-[250px] mt-4 ml-4 justify-between">
            <div className="">
                <div className="text-green-800 font-bold text-xl">YOUR CART</div>
                <div className="text-green-700 font-bold text-[2.5rem] -mt-3">SUMMARY</div>
                <div className="mt-7 text-xl text-gray-600 font-semibold">Total Items: <span className="text-black font-normal">{cart.length}</span></div>
            </div>
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 p-4">
        <div className="flex justify-between items-center">
          <div className="text-xl text-gray-600 font-semibold">Total Amount: <span className="text-black font-bold">${totalPrice}</span></div>
          <button className="bg-green-600 p-3 text-white rounded-lg px-6 font-bold hover:bg-white hover:text-green-600 transform ease-in duration-300 border-2 border-green-600">
            Checkout Now
          </button>
        </div>
      </div>
        </div>
    );
}