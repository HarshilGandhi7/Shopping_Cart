import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import Products from './Products'
import  Price from './Price'
export default function Cart(){
    const {cart}=useSelector((state)=>state);
    return (
        <div>
            <Navbar></Navbar>
            {
                cart.length>0
                ?
                (
                    <div className="flex flex-row h-screen w-3/5 gap-10 mx-auto mt-10 ">
                        <div className="w-3/5"><Products></Products></div>
                        <div className="w-2/5"><Price></Price></div>
                    </div>
                )
                :
                (
                    <div className="flex flex-col h-screen items-center justify-center pb-[200px] gap-5">
                        <div className="text-2xl text-gray-600 font-bold">Your Cart is empty!</div>
                        <div><NavLink to='/'><button className="bg-green-600 p-3 text-white rounded-lg px-[50px] py-5 font-bold hover:bg-white hover:text-green-600 transform ease-in duration-300 border-2 border-green-600"> SHOP NOW </button></NavLink></div>
                    </div>
                )

            }
        </div>
    )
}